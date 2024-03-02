import Wrapper from "../wrapper/Wrapper";

const Arena = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex text-white flex-col justify-center items-center text-center">
          <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
            Vote Your Favourite Team Or Player
          </h1>
          <p className="text-sm font-light text-white py-3 text-center">
            Experience the thrill of sports in pure numbers – Dive into our
            sports arena and explore the statistics that define the game!
          </p>
          <div className="grid grid-cols-2 mt-6 md:grid-cols-4 md:gap-40 gap-16 ">
            <div className="flex items-center gap-2 ">
              <img src="/thumb.webp" alt="" />
              <div className="flex flex-col ">
                <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
                  5k+
                </h1>
                <p className="text-sm font-light text-white py-3 text-center">
                  Members
                  <br />
                  Active
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <img src="/reward.webp" alt="" />
              <div className="flex flex-col ">
                <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
                  20+
                </h1>
                <p className="text-sm font-light text-white py-3 text-center">
                  Games
                  <br />
                  Cover
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/person.webp" alt="" />
              <div className="flex flex-col ">
                <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
                  120+
                </h1>
                <p className="text-sm font-light text-white py-3 text-center">
                  Professional
                  <br />
                  Coach
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src="/cup.webp" alt="" />
              <div className="flex flex-col ">
                <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
                  13+
                </h1>
                <p className="text-sm font-light text-white py-3 text-center">
                  Years of
                  <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Arena;
