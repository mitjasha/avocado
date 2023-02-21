import React from "react";
import { useForm } from "react-hook-form";
import { Profile } from "../../api/api.interface";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import FormInput from "../../components/Inputs/FormInput/FormInput";
import ToolTip from "../../components/ToolTip/ToolTip";
import { IValidation } from "../../pages/ProfileRegistrationScreen/ProfileRegistrationScreen.const";
import "./RegFormScreen.scss";

interface RegFormScreenProps {
  validationName: IValidation;
}

const RegFormScreen: React.FC<RegFormScreenProps> = ({ validationName }) => {
  const {
    register,
    formState: { errors },
  } = useForm<Profile>({ mode: "onChange" });
  return (
    <div className="registration-screen">
      <div className="container profile-reg-container">
        <div className="full-name">
          <div className="full-name__first-name">
            <h2 className="input-title">First Name</h2>
            <div className="input-wrapper input-wrapper_username">
              <FormInput
                type="text"
                placeholder="First Name"
                register={register("firstName", { ...validationName })}
              />
              {errors?.firstName && <ToolTip text={validationName.message} />}
            </div>
          </div>
          <div className="full-name__last-name">
            <h2 className="input-title">Last Name</h2>
            <div className="input-wrapper input-wrapper_username">
              <FormInput
                type="text"
                placeholder="Last Name"
                register={register("lastName", { ...validationName })}
              />
              {errors?.lastName && <ToolTip text={validationName.message} />}
            </div>
          </div>
        </div>
        <div className="email-address">
          <h2 className="input-title">Email Address</h2>
          <div className="input-wrapper input-wrapper_email">
            <RegInput type="email" placeholder="Email Address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegFormScreen;
