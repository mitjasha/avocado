import React, { useState } from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ActivityModal.scss";

interface ActivityModalProps {
  name: string;
  kcalPerMin: number;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ name, kcalPerMin }) => {
  const [kcalBurned, setKcalBurned] = useState<number>(Math.round(kcalPerMin));

  const calcKcalBurned = () => {
    const input = document.querySelector(
      ".activity-popup__input",
    ) as HTMLInputElement;
    setKcalBurned(Number(input.value) * kcalPerMin);
  };

  return (
    <BasicModalComponent title={name} className="activity-popup">
      <div className="activity-popup__wrapper">
        <div className="activity-popup__input-wrapper">
          <RegInput
            type="number"
            placeholder="1"
            className="activity-popup__input"
            onChange={calcKcalBurned}
            defaultValue={1}
          />
          min
        </div>
        <div className="activity-popup__arrow" />
        <div className="activity-popup__kcal">kcal burned: {kcalBurned}</div>
      </div>
      <ButtonTemplate>Save</ButtonTemplate>
    </BasicModalComponent>
  );
};
export default ActivityModal;
