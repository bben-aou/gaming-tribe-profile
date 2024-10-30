import { FormattedMessage } from "react-intl";
import GameCard from "./GameCard";

const HighLightGames = () => {
  return (
    <div className="bg-primary-300 col-span-2  rounded-xl  row-span-2 py-[10px] px-[15px]">
      <div className="w-full flex items-center font-bold tracking-wide text-primary-400 my-[10px]">
        <FormattedMessage id="profile.highlight.games" />
      </div>
      <hr className="my-[10px]" />
      <div className="grid grid-cols-2 grid-row-2 gap-3 ">
        <GameCard/>
        <GameCard/>
        <GameCard/>
        <GameCard/>
      </div>
    </div>
  );
};
export default HighLightGames;
