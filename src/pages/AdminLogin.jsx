import React from 'react';
import { useAuth } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
    const { adminLogin, user } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@gmail.com' && password === 'admin123') {
            adminLogin();
            navigate('/dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <section>
            <div className=" h-screen items-center justify-center flex">
                <form onSubmit={handleSubmit} className="w-full  md:w-[440px] bg-[#777]/30 px-6 py-16 rounded-2xl mx-auto">
                    <img
                        src={"/logo1.png"}
                        alt={"logo"}
                        width={300}
                        height={300}
                        className="w-[70px] md:w-[70px] mx-auto object-contain"
                    />
                    <h1 className="text-3xl text-gold font-semibold mb-8 text-center">Admin Login
                        <p className='text-white text-base font-normal'>
                            Login to continue as admin
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
                </form>
            </div>
        </section>
    );
}

export default AdminLogin;
