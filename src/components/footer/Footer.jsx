import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import Wrapper from "../wrapper/Wrapper"

const Footer = () => {
    return (
        <section className=" border-t border-[#777]/50 pt-10">
            <Wrapper>
                <div className="flex flex-col justify-center items-center">
                    <a href={"/"}>
                        <img
                            src={"/logo1.png"}
                            alt={"logo"}
                            width={300}
                            height={300}
                            className="w-[80px] md:w-[80px] object-contain"

                        />
                    </a>
                    <p className="text-sm py-6 font-light text-white text-center max-w-[600px]">
                        Join us in this exciting process to select the best among the best, and be a part of an event that cherishes sporting excellence and community spirit.
                    </p>

                    <ul
                        className="flex-col md:flex-row flex gap-5 items-center ease-in duration-300 text-white"
                    >
                        <li className="px-5">
                            <a
                                href={"/"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Home
                            </a>
                        </li>
                        <li className="px-5">
                            <a
                                href={"/sponsor"}
                                className="font-medium hover:text-gold duration-300"
                            >
                                Sponsor
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
                            <a href="/vote"
                                className="font-medium hover:text-gold duration-300"
                            >

                                Vote Now
                            </a>
                        </li>
                    </ul>
                </div>

            </Wrapper>
            <div className="py-6 mt-6 bg-gold ">
                <div className="max-w-screen-xl mx-auto px-5">
                    <div className="flex md:flex-row flex-col justify-center items-center gap-5 md:justify-between w-full">

                        <p className="text-black">
                            info@example.com
                        </p>
                        <a
                            href="/vote"
                            className="font-medium text-gold bg-black hover:text-black py-3 px-14 flex items-center gap-2 hover:border-black hover:bg-transparent rounded-full border border-transparent duration-300"
                        >

                            Vote
                        </a>
                        <div className="flex items-center justify-center gap-5">
                            <FaFacebook size={25} className="text-black cursor-pointer " />
                            <FaInstagram size={25} className="text-black cursor-pointer " />
                            <FaTwitter size={25} className="text-black cursor-pointer " />

                        </div>
                    </div>

                </div>

            </div>
            <div className="py-4 w-full text-center flex justify-center items-center">
                <p className="text-sm font-light text-white text-center">

                    Copyright © 2024 Giirai All Rights Reserved
                </p>

            </div>
        </section>
    )
}

export default Footer