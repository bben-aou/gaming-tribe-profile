import { FormattedMessage } from "react-intl";
import { FaGithub } from "react-icons/fa6";
import { useAuth } from "@/providers/AuthProvider";

const LoginWithGithubButton = () => {
  const { initiateGithubLogin } = useAuth();
  return (
    <button
      type="button"
      className="w-full h-[50px] bg-light-100  flex items-center justify-center rounded-[8px] mt-[20px] text-primary-100"
      onClick={initiateGithubLogin}
    >
      <FaGithub className="text-primary-100 mx-[10px] w-[25px] h-[25px]" />
      <FormattedMessage id="login.sign-up.with.github" />
    </button>
  );
};
export default LoginWithGithubButton;
