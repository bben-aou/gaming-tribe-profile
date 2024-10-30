import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import ConditionalRendering from "../common/ConditionalRendering";

type TSignUpOrLoginButtonsProps = {
  label: string;
  isLoading?: boolean;
};
const SignUpOrLoginButtons = (props: TSignUpOrLoginButtonsProps) => {
  const { label, isLoading } = props;
  return (
    <div className="w-full flex flex-col gap-[10px] items-center justify-center">
      <button className="w-full h-[50px] bg-primary-200 rounded-[8px] mt-[20px]">
        <ConditionalRendering
          condition={!isLoading}
          defaultComponent={<>Loading ...</>}
        >
          <FormattedMessage id={label} />
        </ConditionalRendering>
      </button>
      <h1 className="text-light-100">
        You Already Have An Account ? <Link to={"/login/sign-in"}>Login</Link>
      </h1>
    </div>
  );
};
export default SignUpOrLoginButtons;
