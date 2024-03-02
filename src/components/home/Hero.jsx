import Wrapper from "../wrapper/Wrapper";

const Hero = () => {
  return (
    <section>
        <div className="bg-gold/50 blur-3xl w-[400px] h-[400px] rounded-full absolute right-0 top-72 z-[-999]">

        </div>
      <Wrapper>
        <div className="flex z-30 mt-10 md:mt-0 flex-col text-white justify-between items-center h-[80vh] w-full md:flex-row">
          <div className="flex flex-col  items-start text-left w-full md:w-1/2">
            <h2 className="text-lg uppercase md:text-3xl font-semibold">
              Our Commitment
            </h2>
            <h1 className="text-3xl md:text-6xl font-bold text-gold ">
              TO PROMOTING
            </h1>
            <h3 className="text-3xl md:text-6xl font-bold">
              EXCELLENCE{" "}
              <span className="text-lg uppercase md:text-3xl font-semibold">
                {" "}
                IN SPORTS
              </span>
            </h3>
            <p className="font-light text-sm md:text-base pb-4 pt-1 md:py-6">
            Welcome to the SITA Award Event Voting Portal.
            </p>
            <a
              href="/vote"
              className="font-medium text-sm  text-black hover:text-gold bg-gold py-2 md:py-3 px-6 md:px-14 flex items-center gap-2 hover:border-gold hover:bg-black rounded-full border border-transparent duration-300"
            >
              Vote Now
            </a>
          </div>
          <div className="md:w-1/2 flex items-end justify-end w-full md:mt-0 mt-5">
            <img src="/hero.png" alt="" className="rounded-2xl" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
