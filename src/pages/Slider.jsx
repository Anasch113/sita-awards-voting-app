

// eslint-disable-next-line react/prop-types
const Slider = ({ playerVotes, outOf }) => {
  // Calculate the percentage of votes received by the specific player out of the total received votes
  const percentage = (playerVotes / outOf) * 100;

  return (
    <div className="flex flex-col px-4 pb-2 gap-1 items-center">
      <div className="bg-gray-200 h-2 w-full rounded-full">
        <div
          className="bg-black h-full rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <output className="ml-2">{playerVotes} / {outOf}</output>
    </div>
  );
};

export default Slider;

