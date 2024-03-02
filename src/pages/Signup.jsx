import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthProvider';
import Header from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast'

function SignUp() {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {


        try {

            e.preventDefault();

            if (name && email && phone && password) {

                console.log("Form Data:", { name, email, phone, password });

                await signUp(email, password, name, phone);
                updateProfile(auth.currentUser, { displayName: name })
                toast.success("SignUp Successfully")
                navigate("/login")


            } else {
                setError('Please fill in all fields');
            }

        } catch (err) {

            console.log("Error in signUp", err)

            if (err.code === "auth/weak-password") {
                toast.error("Weak Password", "Please choose a stronger password.", "error");
            } else if (err.code === "auth/email-already-in-use") {
                toast.error("User Already Exists", "This email is already registered.", "error");
            } else {
                toast.error("Please fill up all fields",);
            }
        }

        
    };


    return (
        <section>
            <Header />
            <div className="container mx-auto my-20">
                <form onSubmit={handleSubmit} className="max-w-md bg-[#777]/30 px-6 py-16 rounded-2xl mx-auto">
                    <h1 className="text-3xl text-gold font-semibold mb-8 text-center">Sign Up
                        <p className='text-white text-base font-normal'>
                            Create an account to get started
                        </p>
                    </h1>

                    <div className="mb-4">
                        <label className="block text-white text-sm  mb-2" htmlFor="name">
                            Name<span className='text-red-600'> * </span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm  mb-2" htmlFor="email">
                            Email<span className='text-red-600'> * </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm  mb-2" htmlFor="phone">
                            Phone<span className='text-red-600'> * </span>
                        </label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm  mb-2" htmlFor="password">
                            Password<span className='text-red-600'> * </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full border-[#777]/30 py-3 px-3 bg-[#777]/30 text-white leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                    <button type="submit" className="font-medium text-black bg-gold py-3 mx-auto w-[50%] text-center flex justify-center items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                    >
                        Sign Up
                    </button>
                    <p className='text-white text-center font-normal mt-5'>
                        Already have an account? <a href="/login" className='underline text-gold'>Login</a>
                    </p>
                </form>
            </div>
            <Footer />
        </section>
    );
}

export default SignUp;
