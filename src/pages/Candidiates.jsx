import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import Wrapper from "../components/wrapper/Wrapper";
import Slider from "./Slider";
import Cookies from "js-cookie";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Header from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Candidates = () => {
  const { candidiateId } = useParams();
  const categoryIndex = data.findIndex((e) => e.id === Number(candidiateId));
  const category = data[categoryIndex];
  const [playerVotes, setPlayerVotes] = useState({});
  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVotedInCategory, setHasVotedInCategory] = useState(false);

  useEffect(() => {
    const votes = {};
    let voted = false;
    let total = 0;
    category.player.forEach((player) => {
      const voteCookie = Cookies.get(`voted_${category.id}_${player.playerId}`);
      if (voteCookie) {
        voted = true;
        const voteCount = parseInt(voteCookie);
        votes[player.playerId] = voteCount;
        total += voteCount;
      } else {
        votes[player.playerId] = 0;
      }
    });
    setPlayerVotes(votes);
    setTotalVotes(total);
    setHasVotedInCategory(voted);
  }, [category]);

  const handleVote = (categoryId, playerId) => {
    if (!hasVotedInCategory) {
      const voteCookie = Cookies.get(`voted_${categoryId}_${playerId}`);
      if (!voteCookie) {
        Cookies.set(`voted_${categoryId}_${playerId}`, '1', { expires: 365 });
        setPlayerVotes(prevVotes => ({
          ...prevVotes,
          [playerId]: (prevVotes[playerId] || 0) + 1
        }));
        setTotalVotes(prevTotal => prevTotal + 1);
        setHasVotedInCategory(true);
        // alert('Thank you for your vote!');
      } else {
        alert('You have already voted for a player in this category!');
      }
    } else {
      alert('You have already voted in this category!');
    }
  };

  const navigateToNextCategory = () => {
    const nextCategoryIndex = categoryIndex + 1;
    if (nextCategoryIndex < data.length) {
      const nextCategoryId = data[nextCategoryIndex].id;
      window.location.href = `/vote/${nextCategoryId}`;
    } else {
      alert("No more categories available.");
    }
  };

  return (
    <section>
      <Header/>
      <Wrapper>
        <div className=" flex items-center w-full gap-3 md:justify-between">
          <a href="/vote"
            className="font-medium text-black mt-6 md:text-base text-sm bg-gold py-3  w-full justify-center max-w-[250px] flex items-center gap-1 md:gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
          >
            <IoChevronBackOutline size={20} />
            Back to Categories
          </a>
          <button
            onClick={navigateToNextCategory}
            className="font-medium text-black mt-6 md:text-base text-sm bg-gold py-3 md:w-full justify-center w-[240px] max-w-[250px] flex items-center gap-1 md:gap-2 hover:border-gold hover:bg-transparent hover:text-gold rounded-full border border-transparent duration-300"
          >
            Next Vote
            <IoChevronForwardOutline size={20} />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center my-20 w-full">
          <h1 className="md:text-5xl mb-10 text-2xl text-center font-bold text-gold">
            {category.title}
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {category.player.map((player) => (
              <div key={player.playerId} className="flex md:flex-row flex-col ">
                <div className="flex flex-col  justify-between items-center  w-[300px] h-[420px]  rounded-2xl bg-gold">
                  <img
                    src={player.playerImage}
                    alt=""
                    className="w-full rounded-t-2xl object-top object-cover h-[200px]"
                  />
                  <p className="capitalize text-center px-3  text-[18px] font-semibold">
                    {player.playerName}
                  </p>
                  {playerVotes[player.playerId] > 0 ? (
                    <button className="font-medium text-[18px] bg-gold-grad text-black rounded-full py-3 px-14 cursor-default" disabled>
                      Voted
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVote(category.id, player.playerId)}
                      className={`font-medium text-[18px] hover:scale-105 transition-all ease-in duration-150 bg-black text-white rounded-full py-3 px-14 ${hasVotedInCategory ? 'hidden' : ''}`}
                    >
                      {hasVotedInCategory ? "Voted" : "Vote"}
                    </button>
                  )}
                  <div className="w-full">
                    <Slider playerVotes={playerVotes[player.playerId]} outOf={totalVotes} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      <Footer/>
    </section>
  );
};

export default Candidates;
