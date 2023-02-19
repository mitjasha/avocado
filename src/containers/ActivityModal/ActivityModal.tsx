import React from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/RegInput/RegInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ActivityModal.scss";

interface ActivityModalProps {
  name: string;
  kcalPerMin: number;
}

const ActivityModal: React.FC<ActivityModalProps> = ({ name, kcalPerMin }) => {
  const calcKcalBurned = () => {
    const input = document.querySelector(
      ".activity-popup__input",
    ) as HTMLInputElement;
    const kcalBurnedDisplay = document.querySelector(
      ".activity-popup__kcal",
    ) as HTMLElement;
    const kcalBurned = Number(input.value) * kcalPerMin;
    kcalBurnedDisplay.textContent = `kcal burned: ${kcalBurned}`;
  };

  return (
    <BasicModalComponent>
      <h2 className="activity-popup__title">{name}</h2>
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
        <div className="activity-popup__kcal">kcal burned: {kcalPerMin}</div>
      </div>
      <ButtonTemplate>Save</ButtonTemplate>
    </BasicModalComponent>
  );
};
export default ActivityModal;
