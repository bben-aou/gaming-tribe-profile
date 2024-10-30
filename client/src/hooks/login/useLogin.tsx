import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIntl } from "react-intl";
import { useAuth } from "@/providers/AuthProvider";
import {
  getSignInValidators,
  ISignInType,
} from "@/validators/sing-in/validator";
import { loginDefaultValues } from "@/hooks/login/loginDefaultValue";

export const useLogin = () => {
  const intl = useIntl();

  const methods = useForm<ISignInType>({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(getSignInValidators(intl)),
  });

  const {
    control,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const { login } = useAuth();

  const onSubmit = async (data: ISignInType) => {
    console.log("login submission : ", data);
    try {
      await login(data);
    } catch (error) {
        console.log(error)
      alert("Login failed. Please check your credentials.");
    }
  };

  return {
    methods,
    errors,
    control,
    watch,
    handleSubmit,
    setValue,
    onSubmit,
  };
};
