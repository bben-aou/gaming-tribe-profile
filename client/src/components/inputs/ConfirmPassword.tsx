import InputWithLabel from "@/components/common/InputWithLabel";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldError, FieldValues } from "react-hook-form";
import ControlledInput from "../common/ControlledInput";
import { InputType, IPasswordInput } from "@/interfaces/intputs/types";

const ConfirmPasswordInput = <T extends FieldValues>(
  props: Readonly<IPasswordInput<T>>
) => {
  const { control, errors, intl, name, label } = props;
  return (
    <InputWithLabel
      label={label ?? intl.formatMessage({ id: "login.input.password.label" })}
      containerClassName="border-none my-[5px]"
      errorMessage={(errors.confirmPassword as FieldError)?.message}
      children={
        <ControlledInput
          name={name}
          control={control}
          component={Input}
          inputType={InputType.PASSWORD}
          inputProps={{
            type: "password",
            placeholder: "At least 8 characters",
            className: cn(
              " w-full  h-[50px] bg-transparent rounded-[12px] my-[10px] border-primary-200 placeholder:text-light-100 text-light-100",
              {
                ["border-red-400 focus-visible:ring-0 shake-horizontal"]:
                  errors.confirmPassword,
              }
            ),
            id: "confirmPassword",
          }}
        />
      }
    />
  );
};
export default ConfirmPasswordInput;
