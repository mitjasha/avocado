import React from "react";
import { useForm } from "react-hook-form";
import { validationUserName, validationPassword } from "./RegFormScreen.const";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./RegFormScreen.scss";
import { User } from "../../api/api.interface";
import userController from "../../api/user.controller";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import ToolTip from "../../components/ToolTip/ToolTip";

const RegFormScreen: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<User>({ mode: "onChange" });

  const onSubmit = async (data: User) => {
    console.log(data);
    const result = await userController.signUp(data);
    if (result) {
      const accessToken = result.user.token;
      console.log(accessToken);
      localStorage.setItem("accessToken", JSON.stringify(accessToken));
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
    <div className="container registration-screen-container">
      <div className="full-name">
        <div className="full-name__first-name">
          <h2 className="input-title">First Name</h2>
          <div className="input-wrapper input-wrapper_username">
            <RegInput type="text" placeholder="First Name" minLength={4} />
          </div>
        </div>
        <div className="full-name__last-name">
          <h2 className="input-title">Last Name</h2>
          <div className="input-wrapper input-wrapper_username">
            <RegInput type="text" placeholder="Last Name" minLength={4} />
          </div>
        </div>
      </div>
      <div className="email-address">
        <h2 className="input-title">Email Address</h2>
        <div className="input-wrapper input-wrapper_email">
          <RegInput type="email" placeholder="Email Address" minLength={4} />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="username">
          <h2 className="input-title">Username</h2>
          <div className="input-wrapper input-wrapper_username">
            <FormInput
              type="text"
              placeholder="Username"
              register={register("username", { ...validationUserName })}
            />
            {errors?.username && <ToolTip text={validationUserName.message} />}
          </div>
        </div>
        <div className="password">
          <h2 className="input-title">Password</h2>
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
        <ButtonTemplate disabled>Continue</ButtonTemplate>
      </form>
      <p className="rights">
        By continuing, you agree to the <a href="/">Terms of Services</a> &{" "}
        <a href="/">Privacy Policy</a>
      </p>
    </div>
  );
};

export default RegFormScreen;
