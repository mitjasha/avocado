import React from "react";
import { useForm } from "react-hook-form";
import { validationLogin, validationPassword } from "./LoginScreen.const";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./LoginScreen.scss";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import { User } from "../../api/api.interface";
import userController from "../../api/user.controller";
import ToolTip from "../../components/ToolTip/ToolTip";

const LoginScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>({ mode: "onChange" });

  const onSubmit = async (data: User) => {
    const result = await userController.signIn(data);
    if (result) {
      const accessToken = result.user.token;
      console.log(accessToken);
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      window.location.href = "#/main/";
    }
    reset();
  };

  const toggleVisibility = () => {
    const passwordInput = document.querySelector(
      ".reg-input_password",
    ) as HTMLInputElement;
    const showBtn = document.querySelector(
      ".password__show-btn",
    ) as HTMLButtonElement;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showBtn.style.backgroundImage = `url(${hideIcon})`;
    } else {
      passwordInput.type = "password";
      showBtn.style.backgroundImage = `url(${showIcon})`;
    }
  };
  return (
    <div className="login-screen">
      <form
        className="container login-screen-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackButton />
        <h1 className="login-screen__title">Welcome Back</h1>
        <h3 className="login-screen__subtitle">Hi there, you’ve been missed</h3>
        <div className="login-screen__email-address">
          <div className="input-wrapper input-wrapper_email">
            <FormInput
              type="email"
              placeholder="Email Address"
              register={register("username", { ...validationLogin })}
            />
            {errors?.username && <ToolTip text={validationLogin.message} />}
          </div>
        </div>
        <div className="login-screen__password">
          <div className="input-wrapper input-wrapper_password">
            <FormInput
              type="password"
              className="reg-input_password"
              placeholder="Password"
              register={register("password", { ...validationPassword })}
            />
            {errors?.password && <ToolTip text={validationPassword.message} />}
            <button
              type="button"
              className="password__show-btn"
              aria-label="show"
              onClick={toggleVisibility}
            />
          </div>
        </div>
        <ButtonTemplate className="submit-btn" disabled>
          Submit
        </ButtonTemplate>
      </form>
    </div>
  );
};
export default LoginScreen;
