import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validationUserName, validationPassword } from "./RegFormUser.const";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import { EGender, EGoal, User } from "../../api/api.interface";
import userController from "../../api/user.controller";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import ToolTip from "../../components/ToolTip/ToolTip";
import "./RegFormUser.scss";
import profileController from "../../api/profile.controller";

interface RegFormUserProps {
  onClick?: () => void;
}

const RegFormUser: React.FC<RegFormUserProps> = ({ onClick }) => {
  const navigate = useNavigate();

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
      const profile = await profileController.addProfile({
        firstName: "",
        lastName: "",
        gender: EGender.NAN,
        birth: "2021-09-10",
        weight: 0,
        height: 170,
        goal: EGoal.MAINTAIN,
        targetWeight: 0,
        photo: "",
        favorites: [],
        recentRecipes: [],
      });
      console.log(profile);
      const profileID = profile.id;
      localStorage.setItem("profileID", JSON.stringify(profileID));
    }

    navigate("/registration/profile");
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
    <div className="registration-screen">
      <div className="container registration-screen-container">
        <form onSubmit={handleSubmit(onSubmit)} id="userRegistration">
          <div className="username">
            <h2 className="input-title">Username</h2>
            <div className="input-wrapper input-wrapper_username">
              <FormInput
                type="text"
                placeholder="Username"
                register={register("username", { ...validationUserName })}
              />
              {errors?.username && (
                <ToolTip text={validationUserName.message} />
              )}
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
              {errors?.password && (
                <ToolTip text={validationPassword.message} />
              )}
              <button
                type="button"
                className="password__show-btn"
                aria-label="show"
                onClick={toggleVisibility}
              />
            </div>
          </div>
          <ButtonTemplate
            onClick={onClick}
            type="submit"
            form="userRegistration"
          >
            Continue
          </ButtonTemplate>
        </form>
        <p className="rights">
          By continuing, you agree to the <a href="/">Terms of Services</a> &{" "}
          <a href="/">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default RegFormUser;
