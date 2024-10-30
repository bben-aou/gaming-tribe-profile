import InputWithLabel from "@/components/common/InputWithLabel";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldValues } from "react-hook-form";
import ControlledInput from "../common/ControlledInput";
import { IEmailInput, InputType } from "@/interfaces/intputs/types";

const EmailInput = <T extends FieldValues>(props: Readonly<IEmailInput<T>>) => {
  const { control, errors, intl, name } = props;

  return (
    <InputWithLabel
      label={intl.formatMessage({ id: "login.input.email.label" })}
      containerClassName="border-none"
      errorMessage={errors.email?.message?.toString()}
      children={
        <ControlledInput
          name={name}
          control={control}
          component={Input}
          inputType={InputType.TEXT}
          inputProps={{
            type: "email",
            placeholder: "Example@email.com",
            className: cn(
              " w-full  h-[50px] bg-transparent rounded-[12px] my-[10px] border-primary-200 placeholder:text-light-100 text-light-100",
              {
                ["border-red-400  focus-visible:ring-0 shake-horizontal"]:
                  errors.email,
              }
            ),
            id: "email",
          }}
        />
      }
    />
  );
};
export default EmailInput;
