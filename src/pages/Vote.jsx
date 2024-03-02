import Wrapper from "../components/wrapper/Wrapper";
import { data } from "../../data/data";
import { Link } from "react-router-dom";
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useAuth } from "../../auth/AuthProvider";

const Vote = () => {

  const { user } = useAuth();
  console.log(user);
   return (
    <section>
      <Header />
      <Wrapper>
        <div className="flex flex-col my-20">
          <h1 className="md:text-5xl mb-10 text-4xl text-center font-bold text-gold">
            Categories
          </h1>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {data.map((e) => (
              <Link key={e.id} to={`/vote/${e.id}`}>
                <div className="bg-gold p-5 rounded-xl w-[250px] h-[220px] gap-2 flex flex-col text-center items-center justify-center">
                  <div className="w-[120px] h-[120px] rounded-full flex items-center justify-center bg-gold-grad">
                    <img
                      src={e.img}
                      alt=""
                      className="w-[80px] h-[80px] rounded-full object-cover"
                    />
                  </div>
                  <p className="text-red-700 font-semibold text-[18px]">
                    {e.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </section>
  );
};

export default Vote;
