import Wrapper from "../wrapper/Wrapper";

const TopPlayer = () => {
  const data = [
    {
      id: 1,
      img: "/player1.jpg",
      name: "Diini mohamed Dahir galmudug ",
      feild: "TARTAMAYAASHA BEST PLAYER ",
    },
    {
      img: "/player2.jpg",
      name: "Abdisalan asensio galmudug",
      feild: "BEST GOAL KEEPER ",
    },
    {
      img: "/player3.jpg",
      name: "Ahmed Tahliil  Galmudug ",
      feild: "BEST COUCHES",
    },
    {
      img: "/player4.jpg",
      name: "Isku Aamow  koonfurgalbed ",
      feild: "BEST PLAYER INFLUENCERS ",
    },
    {
      img: "/player5.jpg",
      name: "abdisalan asensi galmudug ",
      feild: "ELEVEN BEST PLAYER",
    },
  ];
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col justify-center items-center w-full  md:py-20">
          <h1 className="md:text-3xl text-2xl text-center font-bold text-gold">
            Our Top Players
          </h1>
          <p className="text-sm font-light text-white py-3 text-center">
            Discover the cream of the crop – Explore our list of top players and
            cast your vote for the true legends of the game!
          </p>
          <div className="flex flex-col sm:flex-col  md:flex-row gap-7 items-center justify-center w-full">
            {data.map((e) => (
              <div
                key={e}
                className="flex flex-col duration-200 cursor-pointer ease-in transition-all hover:scale-105 mt-6 justify-center items-center text-center"
              >
                <img
                  src={e.img}
                  alt=""
                  className={`md:w-[300px] md:h-[300px] w-[300px] object-top h-[300px] object-cover ${e.id === 1 ? 'md:mt-6' : 'mt-0'}`}
                />
                <p className="text-gold text-lg font-bold pt-3">{e.name}</p>
                <p className="text-white font-normal ">{e.feild}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TopPlayer;
