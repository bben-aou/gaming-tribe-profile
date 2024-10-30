import { ControlledInputProps, InputType } from "@/interfaces/intputs/types";
import { Controller, FieldValues, Path } from "react-hook-form";

function ControlledInput<TFieldValues extends FieldValues, TComponentProps>({
  name,
  control,
  component: InputComponent,
  rules,
  shouldUnregister = false,
  inputProps,
  inputType,
}: Readonly<ControlledInputProps<TFieldValues, TComponentProps>>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange, onBlur } }) => {
        const onChangeHandler = (newValue: string) => {
          if (inputType === InputType.multiSelect) {
            const currentValue = Array.isArray(value)
              ? (value as string[])
              : [];
            const newValues = currentValue.includes(newValue)
              ? currentValue.filter((v) => v !== newValue)
              : [...currentValue, newValue];
            onChange(newValues);
          } else onChange(newValue);
        };
        const handleClick = (clickedValue: string) => {
          if (inputType === InputType.multiSelect) {
            onChangeHandler(clickedValue);
          } else {
            onChange(clickedValue);
          }
        };

        return (
          <InputComponent
            {...inputProps}
            value={value}
            onChange={onChangeHandler}
            onClick={handleClick}
            onBlur={onBlur}
            {...(inputType !== InputType.SELECT
              ? {}
              : { onSelect: (option: Path<TFieldValues>) => onChange(option) })}
          />
        );
      }}
    />
  );
}

export default ControlledInput;
