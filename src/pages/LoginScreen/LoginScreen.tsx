import React from "react";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import RegInput from "../../components/RegInput/RegInput";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import "./LoginScreen.scss";

const LoginScreen: React.FC = () => {
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
      <div className="container login-screen-container">
        <BackButton />
        <h1 className="login-screen__title">Welcome Back</h1>
        <h3 className="login-screen__subtitle">Hi there, you’ve been missed</h3>
        <div className="login-screen__email-address">
          <div className="input-wrapper input-wrapper_email">
            <RegInput type="email" placeholder="Email Address" minLength={4} />
          </div>
        </div>
        <div className="login-screen__password">
          <div className="input-wrapper input-wrapper_password">
            <RegInput
              type="password"
              className="reg-input_password"
              placeholder="Password"
              minLength={8}
            />
            <button
              type="button"
              className="password__show-btn"
              aria-label="show"
              onClick={toggleVisibility}
            />
          </div>
        </div>
        <button type="submit" className="submit-btn" disabled>
          Submit
        </button>
      </div>
    </div>
  );
};
export default LoginScreen;
