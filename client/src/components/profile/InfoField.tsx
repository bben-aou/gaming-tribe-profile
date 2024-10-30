import { InfoFieldProps } from "@/interfaces/profile/type";

const InfoField = (props: InfoFieldProps) => {
  const { label, value } = props;
  return (
    <div className="w-full flex flex-col gap-[5px]">
      <span className="text-random-70 font-medium text-primary-200">{label}</span>
      <span className="text-random-70 truncate">{value}</span>
    </div>
  );
};
export default InfoField;
