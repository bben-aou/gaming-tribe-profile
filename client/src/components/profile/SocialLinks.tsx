import { FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="w-full ml-[-30px] flex justify-center gap-[15px] mt-[10px]">
      <FaInstagram className="w-[26px] h-[26px] text-light-100" />
      <FaSquareXTwitter className="w-[26px] h-[26px] text-light-100" />
      <FaLinkedin className="w-[26px] h-[26px] text-socialMedia-linkedIn text-light-100" />
    </div>
  );
};
export default SocialLinks;
