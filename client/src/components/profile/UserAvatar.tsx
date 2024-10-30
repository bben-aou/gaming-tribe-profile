import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { CiLink } from "react-icons/ci";
import { useIntl } from "react-intl";
import { User } from "@/interfaces/types";
import { DEFAULT_AVATAR, EMPTY_FIELD } from "@/constants/global";
import { UseUserAvatar } from "@/hooks/profile/useUserAvatar";
import { getFullName } from "@/utils/getFullName";
import { useAuth } from "@/providers/AuthProvider";

type TUserAvatar = {
  user: User | null;
};

const UserAvatar = (props: TUserAvatar) => {
  const { user } = props;
  const {logout} = useAuth();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [randomUsername, setRandomUsername] = useState<string>(
    user?.username ?? ""
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const intl = useIntl();
  const { handleCopyProfileLink, generateUsername } = UseUserAvatar({
    inputRefCurrent: inputRef,
    setIsPopoverOpen,
  });

  useEffect(() => {
    setRandomUsername(generateUsername());
  }, []);

  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center justify-center">
        <img
          src={user?.avatar ?? DEFAULT_AVATAR}
          className="w-[85px] h-[85px] rounded-full ring-4 ring-primary-400 mb-[12px]"
          alt={"img"}
        />
        <h1 className="text-[16px] font-medium tracking-[0.2px] text-dark-10 text-light-100">
          {getFullName(user?.firstName, user?.lastName) ?? EMPTY_FIELD}
        </h1>
        <p className="text-[14px]  text-light-100">
          {user?.username ? `@${user.username}` : randomUsername}
        </p>
      </div>
      <div className="w-full flex-shrink-0 flex items-center justify-center mt-[20px] mb-[30px] gap-3 ">
        <button className="w-[120px] text-[14px] h-[40px] bg-primary-400 text-light-0 rounded-lg" onClick={logout}>
          {intl.formatMessage({ id: "profile.logout.label" })}
        </button>

        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger className="w-[120px] text-[14px] h-[40px]  bg-primary-400 text-light-0 rounded-lg">
            {intl.formatMessage({
              id: "profile.userAvatar.actions.share.profile",
            })}
          </PopoverTrigger>
          <PopoverContent className="flex flex-col justify-center  bg-light-100 rounded-[3px] shadow-lg p-[12px] my-[3px]">
            <h1 className="mt-0 text-[14px] ">Profile Link</h1>
            <div className=" flex justify-center gap-[5px] ">
              <Input
                value={`${window.location.origin}/profile/${user?.id}`}
                ref={inputRef}
                className="text-random-70 focus-visible:ring-0"
              />
              <button
                className="w-[50px] h-[32px] bg-profile-SectionBackGround rounded-lg flex items-center justify-center cursor-pointer"
                onClick={handleCopyProfileLink}
              >
                <CiLink className="h-[20px] w-[20px]" />
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </React.Fragment>
  );
};

export default UserAvatar;
