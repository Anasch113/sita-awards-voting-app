import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Header from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import toast from 'react-hot-toast'
import Swal from 'sweetalert2';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {


        try {


            e.preventDefault();
            await login(email, password)
            toast.success("Login Successfully")
            navigate("/vote")
    
            
        } catch (error) {
            console.log("Error in login", error)

            if (error.code === "auth/invalid-credential") {
              toast.error("Invalid Crdentials, Please Try Again");
          }  else {
              toast.error("Please fill up all fields",);
          }
     
        }
        setEmail("");
        setPassword("")
        
      
    };

    return (
        <section>
            <Header />
            <div className="container mx-auto my-20">
                <form onSubmit={handleSubmit} className="max-w-md bg-[#777]/30 px-6 py-16 rounded-2xl mx-auto">
                    <h1 className="text-3xl text-gold font-semibold mb-8 text-center">Welcome Back!
                        <p className='text-white text-base font-normal'>
                            Login to continue
                        </p>
                    </h1>

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
                        Sign In
                    </button>
                    <p className='text-white text-center font-normal mt-5'>
                        Don&apos;t have an account? <a href="/sign-up" className='underline text-gold'> Sign Up</a>
                    </p>
                </form>
            </div>
            <Footer />
        </section>
    );
}

export default Login;
