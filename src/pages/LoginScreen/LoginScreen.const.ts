interface TloginScreen {
  [key: string]: string;
}

interface IValidation {
  required: boolean;
  pattern: RegExp;
  message: string;
  maxLength: number;
}

export const loginScreen: TloginScreen = {
  PLACEHOLDER_USER: "имя пользователя",
  PLACEHOLDER_PASSWORD: "введите пароль",
  TEXT_BUTTON: "ВОЙТИ",
  TEXT_REGISTRATION: "Регистрация",
  TYPE_TEXT: "text",
  TYPE_PASSWORD: "password",
  TEXT_ERROR_LOGIN:
    "Введите имя пользователя и пароль или пройдите регистрацию",
};

export const validationLogin: IValidation = {
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
