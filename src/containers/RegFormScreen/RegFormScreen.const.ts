interface IValidation {
  required: boolean;
  pattern: RegExp;
  message: string;
  maxLength: number;
}

export const validationUserName: IValidation = {
  required: true,
  maxLength: 32,
  pattern: /[a-zA-Z\d]{4,32}$/,
  message:
    "Имя должно содержать только буквы и цифры и быть не менее 4 и не более 32 символов",
};

export const validationPassword: IValidation = {
  required: true,
  maxLength: 32,
  pattern: /[a-zA-Z\d]{8,32}$/,
  message:
    "Пароль должен содержать только буквы и цифры и быть не менее 8 и не более 32 символов",
};
