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
  message:
    "The name must contain only letters and numbers and be at least 3 and no more than 32 characters",
};

export const validationEmail: IValidation = {
  required: true,
  maxLength: 15,
  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "Invalid email address",
};

export const validationGender: IValidation = {
  required: true,
  message: "Please specify your gender",
};
