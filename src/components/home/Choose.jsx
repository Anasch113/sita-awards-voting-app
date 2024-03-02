import Wrapper from "../wrapper/Wrapper"

import { FaRegThumbsUp } from "react-icons/fa";
const Choose = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex w-full md:flex-row flex-col justify-between items-center gap-5 py-20 text-white">
                    <div className="flex flex-col md:w-1/2 gap-2 ">
                        <p className="text-gold font-semibold text-left">
                            Why Choose Us
                        </p>
                        <h1 className="text-3xl font-bold">Join Us Now</h1>
                        <p className="text-sm font-light text-white py-3 ">Join us in this exciting process to select the best among the best, and be a part of an event that cherishes sporting excellence and community spirit. Cast your vote today, and help us highlight the heroes who inspire us all on and off the field!
                        </p>
                        <div className="flex items-center text-center gap-4 w-full">
                            <div className="flex flex-col w-1/2 gap-3">
                                <div className="  flex items-center justify-center p-5 bg-white rounded-lg">

                                    <img src="/choose1.webp" alt="" className="w-[60px ] h-[60px] object-contain" />
                                </div>
                                <p>
                                    Celebrate Your Heroes
                                </p>

                            </div>
                            <div className="flex flex-col w-1/2 gap-3">
                                <div className=" flex items-center justify-center p-5 bg-white rounded-lg">

                                    <img src="/choose2.webp" alt="" className="w-[60px ] h-[60px] object-contain" />
                                </div>

                                <p>
                                    Honor The Hard Work
                                </p>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col justify-center mt-4 items-center gap-5 w-full">
                            <a href="/"
                                className="font-medium text-black bg-gold py-3 px-14 flex items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                            >

                                Learn More
                            </a>
                            <a href="/vote"
                                className="font-medium text-black bg-gold py-3 px-14 flex items-center gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
                            >

                                Vote Now
                            </a>

                        </div>

                    </div>
                    <div className="md:w-1/2">
                        <div className="bg-gold md:py-40 rounded-tl-xl rounded-bl-xl">
                            <div className="flex flex-col-reverse md:flex-row-reverse gap-4 items-center w-full">
                                <div className="flex flex-col  gap-4">
                                    <img src="/honor1.webp" alt="" />
                                    <img src="/honor2.webp" alt="" />

                                </div>
                                <div className='flex flex-col-reverse md:flex-col  gap-3 '>
                                    <img src="/honor3.webp" alt="" />
                                    <div className="bg-white flex gap-1 md:py-0 py-4 px-2 rounded-md">
                                    <FaRegThumbsUp size={60} className="text-gold" />
                                        <div className="flex flex-col ">
                                            <h1 className="text-gold font-bold text-lg">
                                            Cast Your Vote Today.
                                            </h1>
                                            <p className="text-black text-sm font-normal">
                                            help us highlight the heroes who inspire us all on and off the field!   
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </Wrapper>
        </section>
    )
}

export default Choose