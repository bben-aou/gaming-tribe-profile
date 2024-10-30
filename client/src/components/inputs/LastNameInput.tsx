import InputWithLabel from "@/components/common/InputWithLabel";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ControlledInput from "@components/common/ControlledInput";
import { InputType, TUserName } from "@/interfaces/intputs/types";

const LastNameInput = (props: Readonly<TUserName>) => {
  const { control, errors, intl } = props;

  return (
    <InputWithLabel
      label={intl.formatMessage({ id: "login.sign-up.input.lastName.label" })}
      containerClassName="border-none"
      errorMessage={errors.lastName?.message}
      children={
        <ControlledInput
          name="lastName"
          control={control}
          component={Input}
          inputType={InputType.TEXT}
          inputProps={{
            type: "text",
            placeholder: "Enter your first name",
            className: cn(
                " w-full  h-[50px] bg-transparent rounded-[12px] my-[10px] border-primary-200 placeholder:text-light-100 text-light-100",
                {
                  ["border-red-400  focus-visible:ring-0 shake-horizontal"]: errors.firstName,
                }
              ),
            id: "lastName",
          }}
        />
      }
    />
  );
};
export default LastNameInput;
