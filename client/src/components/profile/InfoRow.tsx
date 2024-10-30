import { InfoRowProps } from "@/interfaces/profile/type";
import InfoField from "@/components/profile/InfoField";

const InfoRow = (props: InfoRowProps) => {
  const { fields } = props;
  return (
    <div className="w-full flex lg:flex-wrap xl:flex-nowrap text-light-100">
      {fields.map((field) => (
        <InfoField key={field.label} {...field} />
      ))}
    </div>
  );
};
export default InfoRow;
