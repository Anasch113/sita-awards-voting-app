import DashboardLayout from "../layout/DashboardLayout";
import { useState, useEffect } from "react";
import { data } from "../../../data/data";
import { ref, get, onValue } from "firebase/database";
import { database } from "../../firebase";

// eslint-disable-next-line react/prop-types
const ResetModal = ({ isOpen, onClose, onReset }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-neutral-700 rounded-2xl  p-4 md:p-10 border border-[#777]/10">
            <p className="text-white text-lg mb-8">
              Are you sure you want to reset votes?
            </p>
            <div className="flex justify-center">
              <button
                onClick={onReset}
                className="bg-red-600 text-white px-4 py-2 rounded-md mr-4"
              >
                Confirm
              </button>
              <button
                onClick={onClose}
                className="bg-white text-black px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Votes = () => {
  const [votesData, setVotesData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);



  ////////////////////////////////////////////////////////////////////////////////////////////

  const [timeRemaining, setTimeRemaining] = useState(null);
  const [votingTime, setVotingTime] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timeRef = ref(database, 'votingTime');

    onValue(timeRef, (snapshot) => {
      if (snapshot.exists()) {
        const timeData = snapshot.val();
        setVotingTime(timeData);
      } else {
        console.log('No voting time found in the database');
      }
    });
  }, []);

  useEffect(() => {
    if (votingTime) {
      const currentTimestamp = new Date().getTime();

      const startTime = new Date(votingTime.startTime).getTime();
      const endTime = new Date(votingTime.endTime).getTime();

      if (currentTimestamp < startTime) {
        setMessage(`Voting will start in ${calculateTimeDifference(currentTimestamp, startTime)}`);
      } else if (currentTimestamp >= startTime && currentTimestamp <= endTime) {
        setMessage(`Voting is ongoing. It will end in ${calculateTimeDifference(currentTimestamp, endTime)}`);

        // Update remaining time every second
        const intervalId = setInterval(() => {
          setMessage(`Voting is ongoing. It will end in ${calculateTimeDifference(new Date().getTime(), endTime)}`);
        }, 1000);

        // Clear interval when the component is unmounted
        return () => clearInterval(intervalId);
      } else {
        setMessage('Voting has ended.');
      }
    }
  }, [votingTime]);

  const calculateTimeDifference = (start, end) => {
    const difference = end - start;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    return `${hours} hours, ${minutes % 60} minutes, ${seconds % 60} seconds`;
  };


/////////////////////////////////////////////////////////////////////////////////////////////

  const closingDate = new Date("2024-03-10T00:00:00Z");

  // Function to calculate time remaining
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const difference = closingDate - currentTime;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Format the time remaining
    const formattedTime = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update state with formatted time remaining
    setTimeRemaining(formattedTime);
  };

  useEffect(() => {
    // Update the countdown every second
    const countdownInterval = setInterval(calculateTimeRemaining, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResetVotes = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const getTopThreePlayers = () => {
    const allPlayers = votesData.flatMap((category) => category.player);
    const sortedPlayers = allPlayers.sort(
      (a, b) => b.playerVotes - a.playerVotes
    );
    return sortedPlayers.slice(0, 3);
  };

  const handleConfirmReset = () => {
    const resetVotesData = votesData.map((category) => ({
      ...category,
      player: category.player.map((player) => ({
        ...player,
        playerVotes: 0,
      })),
    }));
    setVotesData(resetVotesData);
    setIsModalOpen(false);
  };
  // Function to handle sharing on Twitter
  const handleTwitterShare = (winner, category) => {
    const shareUrl = `https://twitter.com/intent/tweet?text=The winner of ${category} is ${winner}!`;
    window.open(shareUrl, "_blank");
  };

  const handleFacebookShare = (winner, category) => {
    // Replace 'example.com' with your actual domain
    const baseUrl = "https://sita-award.vercel.app/vote";
    // Construct the share URL with encoded parameters
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      baseUrl
    )}&quote=The winner of ${category} is ${winner}!`;
    // Open the Facebook share dialog
    window.open(shareUrl, "_blank");
  };

  // Function to handle sharing via email
  const handleEmailShare = (winner, category) => {
    const subject = `Winner of ${category}`;
    const body = `The winner of ${category} is ${winner}.`;
    const shareUrl = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = shareUrl;
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto ">
        <div className="flex items-center w-full justify-between">
          <h1 className="text-2xl font-bold mb-4 text-gold">Voting Results</h1>
          <button
            onClick={handleResetVotes}
            className="bg-gold text-black px-4 py-2 rounded-md mb-4"
          >
            Reset Votes
          </button>
        </div>
        {/* Top 3 players with the most votes */}
        {/* and time remaining box */}
        <div className="w-full flex md:flex-row flex-col gap-4">
          <div className="md:mb-4 md:w-1/2 bg-[#777]/30 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gold mb-2">
              Top 3 Players
            </h2>
            <ul>
              {getTopThreePlayers().map((player, index) => (
                <li key={index} className="text-white">
                  {player.playerName} - Votes: {player.playerVotes}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mb-4 md:w-1/2  bg-[#777]/30 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gold mb-2">
              Time Remaining:
            </h2>
           
              <div className="text-xl md:text-2xl font-semibold text-white">
                {message}
              </div>
           
          </div>
          <div className="mb-4 space-y-2 md:max-w-[200px]">
            <button
              onClick={handleTwitterShare}
              className="mr-2 bg-gold text-black w-full py-2 rounded-md"
            >
              Share on Twitter
            </button>
            <button
              onClick={handleFacebookShare}
              className="mr-2 bg-gold text-black w-full py-2 rounded-md"
            >
              Share on Facebook
            </button>
            <button
              onClick={handleEmailShare}
              className="bg-gold text-black w-full py-2 rounded-md"
            >
              Share via Email
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
          {votesData.map((category) => (
            <div
              key={category.id}
              className="bg-[#777]/30 flex flex-col text-white p-3 md:p-4 rounded-md w-full"
            >
              <div className="flex flex-row justify-between w-full">
                <div>
                  <h2 className="text-lg text-gold font-semibold mb-2">
                    {category.title}
                  </h2>

                  <p>
                    Total Votes in Category:{" "}
                    {category.player.reduce(
                      (acc, curr) => acc + curr.playerVotes,
                      0
                    )}
                  </p>
                  <p className="my-1">
                    Winner Name:{" "}
                    {
                      category.player.reduce((prev, current) =>
                        prev.playerVotes > current.playerVotes ? prev : current
                      ).playerName
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                {category.player.map((player) => (
                  <div
                    key={player.playerId}
                    className="flex md:flex-row flex-col justify-between md:items-center mt-2"
                  >
                    <div className="flex items-center">
                      <img
                        src={player.playerImage}
                        alt={player.playerName}
                        className="w-10 h-10 rounded-full mr-3 object-cover object-top"
                      />
                      <p>{player.playerName}</p>
                    </div>
                    <p>
                      Votes: {player.playerVotes} /{" "}
                      {category.player.reduce(
                        (acc, curr) => acc + curr.playerVotes,
                        0
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Reset Modal */}
      <ResetModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onReset={handleConfirmReset}
      />
    </DashboardLayout>
  );
};

export default Votes;
