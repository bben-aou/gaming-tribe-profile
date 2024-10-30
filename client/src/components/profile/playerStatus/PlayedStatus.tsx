import { FormattedMessage } from "react-intl";
import usePlayerStatus from "@/hooks/playerStatus/usePlayerStatus";

const PlayedStatus = () => {
  const { playerStatus } = usePlayerStatus();
  return (
    <div className="bg-primary-300 col-span-2  rounded-xl  row-span-2 py-[10px] px-[15px]">
      <div className="w-full flex items-center font-bold tracking-wide text-primary-400 my-[10px]">
        <FormattedMessage id="profile.player.status" />
      </div>
      <hr className="my-[10px]" />
      {playerStatus}
    </div>
  );
};
export default PlayedStatus;
