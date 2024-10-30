import { TSingUpForm } from "@/interfaces/login/types";
import FirstNameInput from "@/components/inputs/FirstNameInput";
import LastNameInput from "@/components/inputs/LastNameInput";
import EmailInput from "@/components/inputs/EmailInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import ConfirmPasswordInput from "@/components/inputs/ConfirmPassword";
import SignUpOrLoginButtons from "./SignUpOrLoginButtons";
import Separator from "@/components/sign-up/Separator";
import LoginWithSteamButton from "@/components/sign-up/LoginWithGithubButton";

const SignUpForm = (props: TSingUpForm) => {
  const { control, errors, handleSubmit, onSubmit, intl, isLoading } = props;

  return (
    <div className="w-[45%] h-full flex flex-col items-center justify-center ">
      <form
        className="py-[20px] h-full w-[70%] flex flex-col justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <FirstNameInput control={control} errors={errors} intl={intl} />
        <LastNameInput control={control} errors={errors} intl={intl} />
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
        <ConfirmPasswordInput
          control={control}
          errors={errors}
          intl={intl}
          name="confirmPassword"
          label={intl.formatMessage({
            id: "login.sign-up.input.confirm.password.label",
          })}
        />
        <SignUpOrLoginButtons
          isLoading={isLoading}
          label="home.sign-up.label"
        />
        <Separator label="separator.label.or"/>
       <LoginWithSteamButton/>
      </form>
    </div>
  );
};
export default SignUpForm;
