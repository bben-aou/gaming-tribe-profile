import InputWithLabel from '@/components/common/InputWithLabel';
import { cn } from '@/lib/utils';
import ControlledInput from '@/components/common/ControlledInput';
import { Input } from '@/components/ui/input';
import { InputType, TUserName } from '@/interfaces/intputs/types';

const FirstNameInput = (props : Readonly<TUserName>) => {
    const { control, errors, intl } = props;
  return (
    <InputWithLabel
    label={intl.formatMessage({ id : 'login.sign-up.input.firstName.label' })}
    containerClassName="border-none"
    errorMessage={errors.firstName?.message}
    children={
      <ControlledInput
        name="firstName"
        control={control}
        component={Input}
        inputType={InputType.TEXT}
        inputProps={{
            type: "text",
            placeholder: "Enter your first name",
            className: cn(
              " w-full  h-[50px] bg-transparent rounded-[12px] my-[10px] border-primary-200 placeholder:text-light-100 text-light-100",
              {
                ["border-red-400 0 focus-visible:ring-0 shake-horizontal"]: errors.firstName,
              }
            ),
            id: "firstName"
        }}
      />
    }
  />
  )
};
export default FirstNameInput;
