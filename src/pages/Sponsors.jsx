import Footer from "../components/footer/Footer";
import Header from "../components/navbar/Navbar";
import Wrapper from "../components/wrapper/Wrapper";

const Sponsors = () => {
  const data = [
    {
      img: "/sponsor5.png",
      link: "https://giirfound.org/home/",

    },
    {
      img: "/1.png",
      link: "https://giiraii.com",
    },
    {
      img: "/2.png",
      link: "https://dreamdrape.com",
    },
    {
      img: "/3.png",
      link: "https://consapro.com",
    },
  ];
  return (
    <section>
      <Header/>
      <Wrapper>
        <div className="my-20 flex flex-col items-center justify-center">
          <h1 className="md:text-5xl mb-10 text-4xl text-center font-bold text-gold">
            Sponsors
          </h1>
          <div className="flex md:flex-row flex-col items-center justify-center gap-6 my-10">
            {data.map((e) => (
              <a key={e} href={e.link}>
                <img
                  src={e.img}
                  alt=""
                  className="w-[250px] h-[250px] object-cover rounded-lg mx-auto"
                />
                {/* <p className="text-sm font-light text-white py-3 text-center max-w-screen-sm">
                                        {e.title}
                                    </p> */}
              </a>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer/>
    </section>
  );
};

export default Sponsors;
