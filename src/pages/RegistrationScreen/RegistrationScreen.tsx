/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import RegInput from "../../components/RegInput/RegInput";
import hideIcon from "../../assets/svg/reg-hide.svg";
import showIcon from "../../assets/svg/reg-show.svg";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import NextRegButton from "../../components/Buttons/NextRegButton/NextRegButton";
import maleIcon from "../../assets/svg/male.svg";
import femaleIcon from "../../assets/svg/female.svg";
import "./RegistrationScreen.scss";

const RegistrationScreen: React.FC = () => {
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
        <div className="input-wrapper input-wrapper_username">
          <RegInput type="text" placeholder="Username" minLength={4} />
        </div>
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
        <div className="password">
          <h2 className="input-title">Password</h2>
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
        <button type="submit" className="continue-btn" disabled>
          Continue
        </button>
        <p className="rights">
          By continuing, you agree to the <a href="/">Terms of Services</a> &{" "}
          <a href="/">Privacy Policy</a>
        </p>
      </div>
      <div className="container questions-container">
        <BackButton />
        <div className="process">1 / 6</div>
        <h2 className="reg-title">
          What is your <span className="reg-title__highlight">gender</span>?
        </h2>
        <p className="data-info">
          We will use this data to give you a better diet type for you
        </p>
        <div className="gender-input">
          <input
            type="radio"
            id="male"
            name="gender"
            className="gender-input__input"
          />
          <label htmlFor="male" className="gender-input__label">
            <img src={maleIcon} alt="male" className="gender-input__icon" />
            Male
          </label>
          <input
            type="radio"
            id="female"
            name="gender"
            className="gender-input__input"
          />
          <label htmlFor="female" className="gender-input__label">
            <img src={femaleIcon} alt="female" className="gender-input__icon" />
            Female
          </label>
        </div>
        <NextRegButton degree={150} disabled />
      </div>
    </div>
  );
};
export default RegistrationScreen;
