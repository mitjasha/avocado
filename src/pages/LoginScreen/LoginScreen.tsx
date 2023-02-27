import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  loginScreen,
  validationLogin,
  validationPassword,
} from "./LoginScreen.const";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./LoginScreen.scss";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import { User } from "../../api/api.interface";
import userController from "../../api/user.controller";
import ToolTip from "../../components/ToolTip/ToolTip";
import profileController from "../../api/profile.controller";

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      localStorage.setItem("accessToken", JSON.stringify(accessToken));

      const profile = await profileController.getProfile();

      if (profile) {
        const profileID = profile[0].id;
        localStorage.setItem("profileID", JSON.stringify(profileID));
        navigate("/main");
      }
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
        <BackButton to="/" />
        <h1 className="login-screen__title">{t("login_phrase_1")}</h1>
        <h3 className="login-screen__subtitle">{t("login_phrase_2")}</h3>{" "}
        <div className="login-screen__email-address">
          <div className="input-wrapper input-wrapper_email">
            <FormInput
              type="text"
              placeholder={t("username") as string}
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
              placeholder={t("password") as string}
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
        <ButtonTemplate className="submit-btn">{t("login_btn")}</ButtonTemplate>{" "}
        <div className="error">
          {errors?.username && errors?.password && (
            <p>{loginScreen.TEXT_ERROR_LOGIN}</p>
          )}
        </div>
      </form>
    </div>
  );
};
export default LoginScreen;
