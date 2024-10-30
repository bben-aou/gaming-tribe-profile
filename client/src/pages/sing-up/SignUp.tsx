import LoginIllustration from "@/components/login/LoginIllustration";
import SignUpForm from "@/components/sign-up/SignUpForm";
import useSignUp from "@/hooks/sing-up/useSignUp";
import { useAuth } from "@/providers/AuthProvider";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  const { control, errors, handleSubmit, onSubmit } = useSignUp();
  const { isLoading, errors: authErrors, user } = useAuth();

  console.log("error ---> ", authErrors);
  useEffect(() => {
    if (user) {
      navigate(`/profile/${user?.id}`);
    }
  }, [navigate, user]);

  return (
    <div className="h-screen 2xl:px-[8%] flex  bg-primary-100">
           <LoginIllustration/>

      <SignUpForm
        intl={intl}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};
export default SignUp;
