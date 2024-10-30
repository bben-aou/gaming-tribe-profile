import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaKickstarterK } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="flex  items-center justify-center mt-[20px] gap-3 cursor-pointer">
      <FaInstagram className="w-[32px] h-[32px] text-light-100 cursor-pointer hover:scale-150 transition duration-150 ease-out hover:ease-in" />
      <FaSquareXTwitter className="w-[32px] h-[32px] text-light-100 cursor-pointer hover:scale-150 transition duration-150 ease-out hover:ease-in" />
      <FaKickstarterK className="w-[32px] h-[32px] text-light-100 cursor-pointer hover:scale-150 transition duration-150 ease-out hover:ease-in" />
    </div>
  );
};
export default SocialMedia;
