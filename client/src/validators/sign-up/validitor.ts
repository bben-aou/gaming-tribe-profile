import { IntlShape } from "react-intl";
import { z } from "zod";

export const getSignUpValidators = (intl: IntlShape) => {
  return z
    .object({
      firstName: z
        .string()
        .min(
          2,
          intl.formatMessage({
            id: "login.sign-up.firstName.validation.required.message.error",
          })
        )
        .max(
          25,
          intl.formatMessage({
            id: "login.sign-up.firstName.validation.long.message.error",
          })
        )
        .regex(
          /^[a-zA-Z]+$/,
          intl.formatMessage({
            id: "login.sign-up.firstName.validation.wrongFormat.message.error",
          })
        ),
      lastName: z
        .string()
        .min(
          2,
          intl.formatMessage({
            id: "login.sign-up.lastName.validation.required.message.error",
          })
        )
        .max(
          25,
          intl.formatMessage({
            id: "login.sign-up.lastName.validation.long.message.error",
          })
        )
        .regex(
          /^[a-zA-Z\s]+$/,
          intl.formatMessage({
            id: "login.sign-up.lastName.validation.wrongFormat.message.error",
          })
        ),
      email: z
        .string()
        .email(
          intl.formatMessage({
            id: "login.email.validation.invalid.email.message.error",
          })
        )
        .min(
          1,
          intl.formatMessage({
            id: "login.email.validation.required.message.error",
          })
        ),
      password: z
        .string()
        .min(
          1,
          intl.formatMessage({
            id: "login.password.validation.required.message.error",
          })
        )
        .min(
          8,
          intl.formatMessage({
            id: "login.password.validation.short.message.error",
          })
        )
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          intl.formatMessage({
            id: "login.password.validation.invalidFormat.message.error",
          })
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: intl.formatMessage({
        id: "login.sign-up.confirm.Password.validation.not.match.message.error",
      }),
    });
};

export type ISignUpType = z.infer<ReturnType<typeof getSignUpValidators>>;
