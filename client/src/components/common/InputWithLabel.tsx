import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import ConditionalRendering from "./ConditionalRendering";

type TInputWithLabelProps = {
  label: string;
  children: ReactNode;
  containerClassName?: string;
  errorClassName?: string;
  errorMessage?: string;
};

const InputWithLabel = (props: TInputWithLabelProps) => {
  const { children, label, containerClassName, errorClassName, errorMessage } = props;

  const defaultContainerClassNames =
    "h-full md:w-[100px] border-[1px] md:border-light-30 rounded-[8px] flex-1 py-[5px] px-[10px] w-full border-gray-300";

  const combinedContainerClassNames = cn(
    {
      [defaultContainerClassNames]: !containerClassName,
    },
    containerClassName,
    errorClassName
  );

  const defaultLabelClassNames = "text-[14px] text-primary-200 tracking-wide";

  const combinedLabelClassNames = cn(
    {
      [defaultLabelClassNames]: !errorClassName,
    },
    {
      "text-error-20": !!errorClassName,
    }
  );

  return (
    <div className={combinedContainerClassNames}>
      <h1 className={combinedLabelClassNames}>{label}</h1>
      {children}
      <ConditionalRendering condition={errorMessage !== undefined && errorMessage !== null}>
        <p className="text-[12px] text-red-400">{errorMessage}</p>
      </ConditionalRendering>
    </div>
  );
};

export default InputWithLabel;
