import { DEFAULT_AVATAR } from "@/constants/global";

type TGameItem = {
  id: number;
  gameName: string;
  lastPlayed: string;
};
const GameItem = (props: TGameItem) => {
  const { id, gameName, lastPlayed } = props;
  return (
    <div className="w-full h-[70px] my-[5px] bg-light-100 rounded-lg px-[10px] flex items-center justify-between ">
      <h1 >{id}</h1>
      <img
        src={DEFAULT_AVATAR}
        className="w-[45px] h-[45px] rounded-2xl"
        alt="game"
      />
      <h1 className="font-lighttracking-wide w-1/3">{gameName}</h1>
      <h1 className="font-light text-[14px] w-1/3">{lastPlayed}</h1>
    </div>
  );
};
export default GameItem;
