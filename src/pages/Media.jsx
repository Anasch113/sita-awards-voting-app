import Footer from "../components/footer/Footer";
import Header from "../components/navbar/Navbar";
import Wrapper from "../components/wrapper/Wrapper";

const Media = () => {
  const data = [
    {
      playerName: "Diini mohamed Dahir galmudug",
      playerImage: "/player1.jpg",
    },
    {
      playerName: "Abdirahim Mohamed Hirshabelle",
      playerImage: "/player2.jpg",
    },
    {
      playerName: "Kuuku koonfurgalbed",
      playerImage: "/player3.jpg",
    },
    {
      playerName: "Mohamed Gaabow galmudug",
      playerImage: "/player4.jpg",
    },
    {
      playerName: "Ashraf",
      playerImage: "/player5.jpg",
    },
    {
      playerName: "Diini mohamed Dahir galmudug ",
      playerImage: "/player6.jpg",
    },
    {
      playerName: "Abdisalan asensio galmudug",
      playerImage: "/player7.jpg",
    },
    {
      playerName: "Aweys karaam Banaadir ",
      playerImage: "/player8.jpg",
    },
    {
      playerName: "Xasan Nuur Abdulle Hirshabelle ",
      playerImage: "/player9.jpg",
    },
    {
      playerName: "ahmed Tahliil  Galmudug ",
      playerImage: "/player10.jpg",
    },
    {
      playerName: "Daadir amiin Banaadir",
      playerImage: "/player11.jpg",
    },
    {
      playerName: "Abaas mohamed Hirshabelle",
      playerImage: "/player12.jpg",
    },
    {
      playerName: "Macalin boo. Jubaland",
      playerImage: "/player13.jpg",
    },
    {
      playerName: "Isku Aamow koonfurgalbed ",
      playerImage: "/player14.jpg",
    },
    {
      playerName: "Diini mohamed Dahir Galmudug ",
      playerImage: "/player15.jpg",
    },
    {
      playerName: "Jawahir baarqab Banadir",
      playerImage: "/player16.jpg",
    },
    {
      playerName: "Sacdiyo galmudug",
      playerImage: "/player17.jpg",
    },
  ];

  return (
    <section>
      <Header/>
      <Wrapper>
        <div className="my-20 flex flex-col items-center justify-center w-full">
          <h1 className="md:text-5xl mb-10 text-4xl text-center font-bold text-gold">
            Media
          </h1>
          <div className="flex flex-wrap gap-7 items-center justify-center w-full">
            {data.map((item) => (
              <div key={item} className="text-white flex flex-col relative">
                <img
                  src={item.playerImage}
                  alt={item.playerName}
                  className="max-w-[350px] max-h-[430px] object-cover rounded-xl "
                />

                <p className="absolute  top-[85%] left-0 right-0 text-center overflow-hidden rounded-xl backdrop-blur-xl py-5">
                  {item.playerName}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer/>
    </section>
  );
};

export default Media;
