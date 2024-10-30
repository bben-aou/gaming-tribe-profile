import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { SetStateAction } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useIntl } from "react-intl";
import {
    uniqueNamesGenerator,
    adjectives,
    colors,
    animals,
  } from "unique-names-generator";

type TUseUserAvatar = {
    inputRefCurrent: React.RefObject<HTMLInputElement>
    setIsPopoverOpen: (value : SetStateAction<boolean>) => void
}
export const UseUserAvatar = (props : TUseUserAvatar) => {
    const { inputRefCurrent, setIsPopoverOpen } = props;
    const { toast } = useToast();
    const intl = useIntl();
  
    const handleCopyProfileLink = async () => {
      if (inputRefCurrent.current) {
        const success = await copyToClipboard(inputRefCurrent.current);
        if (success) {
          toast({
            title: intl.formatMessage({ id: "profile.userAvatar.toast.title" }),
            variant: "default",
            description: intl.formatMessage({
              id: "profile.userAvatar.toast.message",
            }),
            duration: 1500,
            action: <FaCheckCircle />,
            className: cn(
              "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-success-10 text-light-0"
            ),
          });
          setIsPopoverOpen(false);
        }
      }
    };
    const generateUsername = () => {
        const newUsername = uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
          length: 1,
          separator: "",
          style: "capital",
        });
        return `@${newUsername}`;
      };

    return { handleCopyProfileLink, generateUsername }
}
