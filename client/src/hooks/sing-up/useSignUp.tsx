import {
  getSignUpValidators,
  ISignUpType,
} from "@/validators/sign-up/validitor";
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import { signInDefaultValues } from "@/hooks/sing-up/signUpDefaultValues";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import { useAuth } from "@/providers/AuthProvider";
import { FaCheckCircle } from "react-icons/fa";
import { cn } from "@/lib/utils";

const useSignUp = () => {
  const intl = useIntl();
  const { toast } = useToast();

  const { register } = useAuth();

  const methods = useForm<ISignUpType>({
    defaultValues: signInDefaultValues,
    resolver: zodResolver(getSignUpValidators(intl)),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = async (data: ISignUpType) => {
    console.log("sign up submission : ", data);
    try {
      await register(data);
      toast({
        title: `Hi ${data.firstName}, `,
        variant: "default",
        description: "you have successfully registered!",
        duration: 3000,
        action: <FaCheckCircle />,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-success-10 text-light-0"
        ),
      });
    } catch (error) {
      console.log("user registration failed : ", error);
    }
  };
  return {
    methods,
    errors,
    control,
    handleSubmit,
    onSubmit,
  };
};
export default useSignUp;
