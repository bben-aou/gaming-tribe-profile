
const Achievements = () => {
  return (
    <div className="bg-primary-300 col-span-2  rounded-xl  row-span-2 py-[10px] px-[15px]">
      <div className="w-full h-[15%] flex flex-col items-center justify-center">
        <h1 className="text-[35px] text-primary-400">Your Achievements </h1>
      </div>
        <div className="w-full h-[85%] flex items-center justify-center text-light-100">
            You Have No Achievement Yet :(
        </div>
    </div>
  );
};
export default Achievements;
