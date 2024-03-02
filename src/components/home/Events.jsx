import Wrapper from "../wrapper/Wrapper"


const Events = () => {
    return (
        <section>
            <Wrapper>
                <div className="w-full flex flex-col justify-center items-center  rounded-lg pt-32 md:py-20 ">
                    <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                        <div className="bg-white h-[100px] flex items-center justify-center w-[100px] rounded-full ">
                            <img src="/frame.webp" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="text-xl md:text-2xl font-bold text-white ">
                                Upcoming Events
                            </p>
                            <a href="/"
                                className="font-medium text-sm text-black hover:text-gold bg-gold py-2 md:py-3 px-6 flex items-center gap-2 hover:border-gold hover:bg-black rounded-full border border-transparent duration-300"
                            >
                                Check Now
                            </a>

                        </div>
                        <div>
                            <img src="/gir-logo.webp" alt="" className="w-[200px] h-[200px] object-contain " />
                        </div>
                        <div className="flex flex-col max-w-[390px] border-t border-r border-gold p-5 border-b text-white">
                            <h1 className="text-[18px] font-semibold">
                                Event:
                            </h1>
                            <p className="font-light text-sm">
                            Please Note That All Votes Must Be Submitted. Votes Submitted After This Deadline Will Not Be Counted. We Encourage You To Vote As Soon As Possible To Ensure Your Voice Is Heard! 
                            </p>

                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default Events