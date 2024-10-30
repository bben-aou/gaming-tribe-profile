import { IntlShape } from "react-intl";
import { z } from "zod";

export const getSignInValidators = (intl: IntlShape) => {
  return z.object({
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
        intl.formatMessage({ id : 'login.password.validation.invalidFormat.message.error'})
      ),
  });
};

export type ISignInType = z.infer<ReturnType<typeof getSignInValidators>>;
