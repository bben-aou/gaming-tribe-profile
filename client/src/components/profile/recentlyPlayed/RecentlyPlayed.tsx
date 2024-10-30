import { FormattedMessage } from "react-intl";
import useGameItem from "@/components/profile/recentlyPlayed/useGameItem";

export default function RecentlyPlayed() {
  const { recentGamesMapping } = useGameItem();
  return (
    <div className="bg-primary-300 col-span-2  rounded-xl  row-span-2 py-[10px] px-[15px]">
      <div className="w-full flex items-center font-bold tracking-wide text-primary-400 my-[10px]">
        <FormattedMessage id="profile.recent.games" />
      </div>
      <hr className="my-[10px]" />
      <div className="overflow-auto">{recentGamesMapping}</div>
    </div>
  );
}
