import { ISignInType } from "@/validators/sing-in/validator";
import { ISignUpType } from "@/validators/sign-up/validitor";
import {
    Control,
    FieldValues,
    RegisterOptions,
    Path,
    FieldErrors,
  } from "react-hook-form"
import { IntlShape } from "react-intl";

export enum InputType {
    TEXT = "text",
    NUMBER = "number",
    DATE = "date",
    SELECT = "select",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    FILE = "file",
    PASSWORD = "password",
    HIDDEN = "hidden",
    EMAIL = "email",
    URL = "url",
    TEL = "tel",
    COLOR = "color",
    TIME = "time",
    DATETIME = "datetime",
    MONTH = "month",
    WEEK = "week",
    YEAR = "year",
    MONTHDAY = "monthday",
    TIMEZONE = "timezone",
    RANGE = "range",
    DURATION = "duration",
    WEEKDAY = "weekday",
    MONTHDAYOFWEEK = "monthdayofweek",
    QUARTER = "quarterter",
    SEASON = "season",
    CUSTOM = "custom",
    PHONE = "phone",
    Button = "button",
    multiSelect = "multiSelect",
  }
  
  export interface ControlledInputProps<
    TFieldValues extends FieldValues,
    TComponentProps
  > {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    component: React.ComponentType<TComponentProps>;
    rules?: Omit<
      RegisterOptions<TFieldValues, Path<TFieldValues>>,
      "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"
    >;
    shouldUnregister?: boolean;
    inputProps: TComponentProps;
    inputType?: InputType;
  }
  export interface ISignUpInput {
    control: Control<ISignUpType>;
    errors: FieldErrors<ISignUpType>;
    intl: IntlShape;
    isLoading?: boolean
  }
  
  export interface IEmailInput<T extends FieldValues> {
    control: Control<T>;
    errors: FieldErrors<T>;
    name: Path<T>;
    intl: IntlShape;
  }
  export interface IPasswordInput<T extends FieldValues> {
    control: Control<T>;
    errors: FieldErrors<T>;
    name: Path<T>;
    intl: IntlShape;
    label? : string;
  }
  export interface ISignUpInput {
    control: Control<ISignUpType>;
    errors: FieldErrors<ISignUpType>;
    intl: IntlShape;
    isLoading?: boolean
  }

export interface ISignInInput {
  control: Control<ISignInType>;
  errors: FieldErrors<ISignInType>;
  intl: IntlShape;
}
  
  // export interface TEmailInput extends ISignInInput  {}
  export type TPasswordInput = ISignInInput
  export type TPhoneInput = ISignUpInput
  export type TUserName = ISignUpInput
  