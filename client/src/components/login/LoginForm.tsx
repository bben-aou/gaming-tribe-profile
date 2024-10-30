import { TSingInForm } from "@/interfaces/login/types";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import LoginButton from "@/components/login/LoginButton";
import Separator from "@/components/sign-up/Separator";
import SocialMedia from "@/components/login/SocialMedia";

const LoginForm = (props: TSingInForm) => {
  const { control, errors, handleSubmit, onSubmit, intl } = props;
  return (
    <div className="w-[45%] h-full flex flex-col items-center justify-center ">
      <form
        className="py-[20px] h-full w-[70%] flex flex-col justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <EmailInput
          control={control}
          errors={errors}
          intl={intl}
          name="email"
        />
        <PasswordInput
          control={control}
          errors={errors}
          intl={intl}
          name="password"
        />
        <LoginButton label="home.login.label" />
        <Separator label="separator.label.followUs" />
        <SocialMedia />
      </form>
    </div>
  );
};
export default LoginForm;
