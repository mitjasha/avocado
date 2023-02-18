export interface IValidation {
  required: boolean;
  pattern: RegExp;
  message: string;
  maxLength: number;
}

export const validationName: IValidation = {
  required: true,
  maxLength: 32,
  pattern: /[a-zA-Z\d]{4,32}$/,
  message:
    "Имя должно содержать только буквы и цифры и быть не менее 4 и не более 32 символов",
};

export const validationEmail: IValidation = {
  required: true,
  maxLength: 15,
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
};
