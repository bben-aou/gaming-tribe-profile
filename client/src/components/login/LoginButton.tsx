import { FormattedMessage } from "react-intl";

type TLoginButtonProps = {
  label: string;
};
const LoginButton = (props: TLoginButtonProps) => {
  const { label } = props;
  return (
    <button
      className="w-full h-[50px] bg-primary-200 rounded-[8px] my-[20px]"
    >
      <FormattedMessage id={label} />
    </button>
  );
};
export default LoginButton;
