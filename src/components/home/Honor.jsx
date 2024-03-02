import Wrapper from "../wrapper/Wrapper"


const Honor = () => {
    return (
        <section>
            <Wrapper>
                <div className="flex flex-col md:flex-row items-center w-full py-20 gap-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-1/2 ">
                        <div className="flex flex-col  md:w-3/5 gap-4">
                            <img src="/honor1.webp" alt="" />
                            <img src="/honor2.webp" alt="" />

                        </div>
                        <div className=' md:w-[655px]'>
                            <img src="/honor3.webp" alt="" />
                        </div>

                    </div>
                    <div className="md:w-1/2 text-center md:text-left flex flex-col text-white gap-5 justify-end">
                        <h1 className="md:text-3xl text-2xl font-bold text-gold">
                            We Honor The Hard Work
                        </h1>
                        <p className="text-sm font-light">
                            Welcome to the SITA Award Sports Event Voting Portal! As a cornerstone of our commitment to promoting excellence in sports, this platform is dedicated to celebrating and recognizing the outstanding achievements of athletes and teams. Your vote plays a crucial role in honoring the hard work, talent, and spirit of these sports stars.
                        </p>
                        <div className="flex md:flex-row flex-col  items-center gap-5">
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

                </div>
            </Wrapper>
        </section>
    )
}

export default Honor