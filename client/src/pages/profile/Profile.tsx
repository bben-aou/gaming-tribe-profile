import Achievements from "@/components/profile/achievements/Achievements";
import HighLightGames from "@/components/profile/highlightGames/HighLightGames";
import PlayedStatus from "@/components/profile/playerStatus/PlayedStatus";
import RecentlyPlayed from "@/components/profile/recentlyPlayed/RecentlyPlayed";
import UserInformation from "@/components/profile/UserInformation";
import { useAuth } from "@/providers/AuthProvider";

export default function Profile() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="2xl:px-[8%] h-screen flex justify-center items-center hide-scrollbar bg-primary-100">
      <div className="w-full h-full overflow-auto lg:grid grid-cols-6 grid-rows-4 gap-[15px] md:py-[15px] md:px-[8px] hide-scrollbar">
        <UserInformation user={user} />
        <HighLightGames />
        <PlayedStatus />
        <RecentlyPlayed />
        <Achievements/>
      </div>
    </div>
  );
}
