import { useIntl } from "react-intl";

import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/login/useLogin";
import LoginForm from "@/components/login/LoginForm";
import LoginIllustration from "@/components/login/LoginIllustration";

//TODO : make sure to trim the inputs values to avoid sending unnecessary whitespace to the backend
const Login = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { control, errors, handleSubmit, onSubmit } = useLogin();
  const { errors: authErrors, user } = useAuth();
  console.log("auth errors : ", authErrors.login);

  useEffect(() => {
    if (user) {
      navigate(`/profile/${user?.id}`);
    }
  }, [navigate, user]);

  console.log(errors);
  return (
    <div className="h-screen 2xl:px-[8%] flex  bg-primary-100">
     <LoginIllustration/>
      <LoginForm
        intl={intl}
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </div>
  );
};
export default Login;
