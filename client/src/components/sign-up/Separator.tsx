import { FormattedMessage } from "react-intl";

const Separator = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex items-center mt-[15px]">
      <span className="h-[1px] w-1/2 bg-primary-200" />
      <span className="text-light-100 px-[10px]">
        <FormattedMessage id={label}/>
      </span>
      <span className="h-[1px] w-1/2 bg-primary-200" />
    </div>
  );
};
export default Separator;
