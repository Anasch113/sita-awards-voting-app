import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../../../auth/AuthProvider";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const { user, logOut } = useAuth();
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    const handleNavbar = () => {
        setNav(!nav);
       
    };
    const handleLogout = async() => {
      await logOut();
       navigate("/login")
    };

    return (
        <div className="top-0 z-50 border-b border-[#777]/50  sticky w-full ease-in duration-300 items-center bg-black/30 backdrop-blur-sm">
            <div className="flex  justify-between max-w-screen-xl items-center z-50 m-auto md:pl-3 md:py-2 md:pr-0 pl-3 pr-3 py-2  text-white">
                <a href={"/"}>
                    <img
                        src={"/logo1.png"}
                        alt={"logo"}
                        width={300}
                        height={300}
                        className="w-[80px] md:w-[80px]  object-contain"
                    />
                </a>
                <ul className="hidden lg:flex items-center ease-in duration-300 ">
                    <li className="px-5">
                        <a href={"/"} className="font-medium hover:text-gold duration-300">
                            Home
                        </a>
                    </li>
                    <li className="px-5">
                        <a
                            href={"/sponsor"}
                            className="font-medium hover:text-gold duration-300"
                        >
                            Sponsors
                        </a>
                    </li>
                    <li className="px-5">
                        <a
                            href={"/contact"}
                            className="font-medium hover:text-gold duration-300"
                        >
                            Contact Us
                        </a>
                    </li>
                    <li className="px-5">
                        <a
                            href={"/media"}
                            className="font-medium hover:text-gold duration-300"
                        >
                            Media
                        </a>
                    </li>

                    <li className="px-5">
                        <a
                            href="/vote"
                            className="font-medium text-black bg-gold py-3 px-8 flex items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                        >
                            Vote Now
                        </a>
                    </li>
                    <div>
                        {user ? (
                            <button onClick={handleLogout} className="font-medium text-black bg-gold py-3 px-6 flex items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                            >Logout</button>
                        ) : (
                            <a href="/login" className="font-medium text-black bg-gold py-3 px-10 flex items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                            >Signin</a>
                        )}
                    </div>
                </ul>

                {/* menu button  */}
                <div onClick={handleNavbar} className="block lg:hidden z-20 ">
                    {nav ? (
                        <AiOutlineClose size={25} className="text-white cursor-pointer" />
                    ) : (
                        <div className="flex cursor-pointer flex-col gap-2 justify-center items-center sm:mr-3">
                            <div className="border-t-2 rounded-full border-primary-grey w-6"></div>
                            <div className="border-t-2 rounded-full border-primary-grey w-6"></div>
                        </div>
                    )}
                </div>
                {/* mobile menu */}
                <div
                    className={
                        nav
                            ? "lg:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/95 text-white text-center ease-linear duration-200"
                            : "lg:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black/75 text-white text-center ease-linear duration-200"
                    }
                >
                    <ul className=" ">
                        <li className="p-3">
                            <a
                                href={"/"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li className="p-3">
                            <a
                                href={"/sponsor"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Sponsors
                            </a>
                        </li>
                        <li className="p-3">
                            <a
                                href={"/contact"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                        <li className="p-3">
                            <a
                                href={"/media"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Media
                            </a>
                        </li>
                            <div>
                                {user ? (
                                    <div>
                                        
                                          
                                        <button onClick={handleLogout}  className="font-medium bg-gold py-3 px-14 flex items-center gap-2 hover:border-gold hover:bg-black rounded-full border border-transparent duration-300"
                                        >Logout</button>
                                    </div>
    
                                ) : (
                                    <a href="/login" className="font-medium bg-gold py-3 text-center justify-center flex items-center gap-2 hover:border-gold hover:bg-black rounded-full border border-transparent duration-300"
                                    >Signin</a>
                                )}
                            </div>
                        <li className="p-3">
                            <a
                                href="/vote"
                                className="font-medium bg-gold py-3 px-14 flex items-center gap-2 hover:border-gold hover:bg-black rounded-full border border-transparent duration-300"
                            >
                                Vote
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}
