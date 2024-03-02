import { useState, useEffect, useRef } from "react";
import DashboardLayout from "../layout/DashboardLayout"
import { useAuth } from "../../../auth/AuthProvider";
import { database } from "../../firebase";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import AddUserModal from "./AddUserModal";
import Swal from 'sweetalert2';


const Users = () => {

  // const { fetchfetchAllUsers } = useAuth();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [openModal, setOpanModal] = useState(false);
  const [newUser, setNewUser] = useState([]);

  const { deleteVoter } = useAuth();


  useEffect(() => {


    const fetchAllUsers = async () => {
      try {
        const usersRef = ref(database, `users`);
        const usersSnapshot = await get(usersRef);

        if (usersSnapshot.exists()) {
          const usersData = usersSnapshot.val();

          console.log(usersData)
          // Convert nested object into an array of users
          const usersArray = Object.entries(usersData).map(([uid, userData]) => ({
            uid,
            ...userData,
          }));

          setUsers(usersArray);




        } else {
          console.log('No users found');
        }
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchAllUsers();


  }, [])



  const handleOpenModal = (e) => {
    e.preventDefault();
    setOpanModal(true)


  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setOpanModal(false)


  };



  const handleDeleteUser = async (userId) => {
    try {
      
      const result = await Swal.fire({
        
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
  
      if (result.isConfirmed) {

        await deleteVoter(userId);
        await Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success"
        });
        
        window.location.reload();
      }
    } catch (error) {
      console.log("error while deleting from client", error);
    }
  };
  return (
    <DashboardLayout>

      <div className="bg-black text-white pt-2 rounded-lg">
        <h2 className="text-2xl text-gold font-semibold mb-4">User Table</h2>
        <div className="mb-4 flex max-w-[500px] gap-4">
          <input
            type="text"
            placeholder="Enter new user"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
          />
          <button onClick={handleOpenModal} className="font-medium text-black bg-gold py-3 mx-auto w-[50%] text-center flex justify-center items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded border border-transparent duration-300">Add User</button>


          {
            openModal ? (
              <div>
                <AddUserModal openModal={openModal} closeModal={handleCloseModal} username={name} />
              </div>


            ) : (
              null
            )

          }

        </div>
        <table className="w-full overflow-hidden">
          <thead className="border-[#777]/50 border-b border-t">
            <tr className="border-[#777]/50 border">
              <th className="py-2 border-[#777]/50 border">ID</th>
              <th className="py-2 border-[#777]/50 border">Name</th>
              <th className="py-2 border-[#777]/50 border">Action</th>
            </tr>
          </thead>
          <tbody>

            {
              users.map((user) => (
                <tr key={user.uid} className="text-center border-[#777]/50 border">
                  <td className="py-2 border-[#777]/50 border">{user.uid}</td>
                  <td className="py-2 border-[#777]/50 border">{user.name}</td>
                  <td className="py-2 border-[#777]/50 border">
                    <button
                      onClick={() => handleDeleteUser(user.uid)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }



          </tbody>
        </table>

      </div>
    </DashboardLayout>
  )
}

export default Users