import { createContext, useState, useContext, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  deleteUser,

  onAuthStateChanged,
  signOut,
  updateProfile,
  updatePhoneNumber
  


} from "firebase/auth";
import { auth } from '../src/firebase';
import { database } from '../src/firebase';
import { getDatabase, ref, set, get, onValue, remove } from "firebase/database";



const AuthContext = createContext();


export const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState("null")


  const adminLogin = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  const logOut = () => {
     signOut(auth)
  };


  const signUp = async (email, password, name, phone) => {

    console.log(name, phone, email, password)
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const userData = userCredential.user;
    await createUserInDatabase({ userId: userData.uid, email: userData.email, name: name, phone: phone });


    return userCredential;


  };


  const createUserInDatabase = async (userData) => {
    try {
      console.log("User in db", userData);
      const userRef = ref(database, `users/${userData.userId}`);
      await set(userRef, userData);
      console.log("User data created in the Realtime Database");
    } catch (error) {
      console.error("Error creating user data in the Realtime Database:", error.message);
      throw error;
    }
  };






  const login = async (email, password) => {
    try {
      // Check if the user exists in the Realtime Database
      const usersRef = ref(database, 'users');
      const snapshot = await get(usersRef);
  
      if (snapshot.exists()) {
        const users = snapshot.val();
        const userWithEmail = Object.values(users).find(user => user.email === email);
  
        if (userWithEmail) {
          // User exists in the Realtime Database, proceed with login
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          return userCredential;
        } else {
          // User not found in the Realtime Database
          console.log("User not found in the Realtime Database");
          alert("User not found")
          throw new Error("Invalid login credentials");
        }

      } else {
        // No users found in the Realtime Database
        console.log("No users found in the Realtime Database");
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login", error);
      throw error;
    }
  };


  const deleteVoter = async (userId) => {
    try {
      // Remove the user data from the Realtime Database
      const userRef = ref(database, `users/${userId}`);
      await remove(userRef);
  
      console.log("User data removed from Realtime Database");
  
      // If needed, you can also delete the user from Firebase Authentication
      // const user = auth.currentUser;
      // await user.delete();
  
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error while deleting user from Firebase", error);
      throw error; // You might want to rethrow the error or handle it appropriately
    }
  };


  const fetchAllUsers = async () => {
    try {
      const usersRef = ref(database, 'users');
      const usersSnapshot = await get(usersRef);

      if (usersSnapshot.exists()) {
        const allUsers = usersSnapshot.val();
        console.log('All Users:', allUsers);
      } else {
        console.log('No users found');
      }
    } catch (error) {
      console.error('Error fetching users:', error.message);
    }
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAdmin, login, adminLogin, logOut, signUp, fetchAllUsers, deleteVoter }}>
      {children}
    </AuthContext.Provider>
  );
};
