import { User } from "@/interfaces/types";
import UserAvatar from "@components/profile/UserAvatar";
import AboutMe from "@/components/profile/AboutMe";
import PersonnelInformation from "@/components/profile/PersonalInformation";
import SocialLinks from "@/components/profile/SocialLinks";

type TUserInformationProps = {
  user: User | null;
};
const UserInformation = (props: TUserInformationProps) => {
  const { user } = props;
  return (
    <div className="bg-primary-300 col-span-2 md:rounded-xl row-span-4 py-[35px] px-[25px] flex flex-col min-h-0">
      <UserAvatar user={user} />
      <div className=" flex-grow overflow-auto py-[20px] flex flex-col gap-3 w-full rounded lg hide-scrollbar">
        <AboutMe user={user} />
        <PersonnelInformation user={user} />
        <SocialLinks/>
      </div>
    </div>
  );
};
export default UserInformation;
