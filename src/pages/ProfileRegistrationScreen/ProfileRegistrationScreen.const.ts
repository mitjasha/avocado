import { useTranslation } from "react-i18next";

const { t } = useTranslation();

export interface IValidation {
  required: boolean;
  pattern?: RegExp;
  message: string;
  maxLength?: number;
}

export const validationName: IValidation = {
  required: true,
  maxLength: 32,
  pattern: /[a-zA-Z\d]{3,32}$/,
  message: t("name_validation"),
};

export const validationEmail: IValidation = {
  required: true,
  maxLength: 15,
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: t("email_validation"),
};

export const validationGender: IValidation = {
  required: true,
  message: t("gender_validation"),
};
