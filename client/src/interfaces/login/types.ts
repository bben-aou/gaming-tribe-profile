import { ISignUpType } from "@/validators/sign-up/validitor";
import { ISignInType } from "@/validators/sing-in/validator";
import {
  Control,
  FieldErrors,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";
import { IntlShape } from "react-intl";

export interface ISignUpInput {
  control: Control<ISignUpType>;
  errors: FieldErrors<ISignUpType>;
  intl: IntlShape;
  isLoading?: boolean;
}

export type THandleSubmitSignUp = (
  onValid: SubmitHandler<ISignUpType>,
  onInvalid?: SubmitErrorHandler<ISignUpType>
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export type TSubmitHandlerSignUp = SubmitHandler<ISignUpType>;

export interface TSingUpForm extends ISignUpInput {
  handleSubmit: THandleSubmitSignUp;
  onSubmit: TSubmitHandlerSignUp;
}

export type THandleSubmit = (
  onValid: SubmitHandler<ISignInType>,
  onInvalid?: SubmitErrorHandler<ISignInType>
) => (e?: React.BaseSyntheticEvent) => Promise<void>;

export interface ISignInInput {
  control: Control<ISignInType>;
  errors: FieldErrors<ISignInType>;
  intl: IntlShape;
}
export type TSubmitHandler = SubmitHandler<ISignInType>;


export interface TSingInForm extends ISignInInput {
  handleSubmit: THandleSubmit;
  onSubmit: TSubmitHandler;
}