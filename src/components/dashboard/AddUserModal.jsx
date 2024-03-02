import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../auth/AuthProvider';
import Header from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import Modal from "react-modal"
import toast from 'react-hot-toast';

function AddUserModal({ username, openModal, closeModal }) {
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = React.useState(username);
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name && email && phone && password) {

            console.log("Form Data:", { name, email, phone, password });

            await signUp(email, password, name, phone);
            updateProfile(auth.currentUser, { displayName: name })
            toast.success("User has been added")
            window.location.reload();


        } else {
            setError('Please fill in all fields');
        }
    };


    return (
        <Modal

            isOpen={openModal}
            onRequestClose={closeModal}
            contentLabel="Chatbot Modal"
            className="modal-content"
            overlayClassName="modal-overlay"
            
            >
            <div className="container mx-auto my-20">
                <form onSubmit={handleSubmit} className="max-w-md bg-[]/30 px-6 py-16 rounded-2xl mx-auto">


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
                        Add User
                    </button>

                </form>
            </div>

        </Modal>
    );
}

export default AddUserModal;
