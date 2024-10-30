const GameCard = () => {
  return (
    <div className="col-span-1 row-span-2 h-[160px] relative rounded-xl">
      <img
        alt="gameCover"
        src="clash-of-clans.jpg"
        className="max-h-[160px] opacity-50  rounded-xl w-full bg-cover"
      />
      <h1 className="absolute top-1/2 left-[25%] font-bold text-light-100">
        Clash of Clans
      </h1>
    </div>
  );
};
export default GameCard;
