import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import { ProductRequest } from "../../api/api.interface";
import "./ProductModal.scss";
import eventMealController from "../../api/event-meal.controller";
import { eventTime } from "../../helpers/getEventTime";

interface ProductProps {
  data: ProductRequest;
  mealType: string;
}

const ProductModal: React.FC<ProductProps> = ({ data, mealType }) => {
  const { t } = useTranslation();

  const [kcal, setKcal] = useState<number>(Math.round(data.calories_100g));
  const [proteins, setProteins] = useState<number>(
    Math.round(data.proteins_100g),
  );
  const [fats, setFats] = useState<number>(Math.round(data.fat_100g));
  const [carbs, setCarbs] = useState<number>(Math.round(data.carbs_100g));

  const updateModalData = () => {
    const modalInput = document.querySelector(
      ".modal__input",
    ) as HTMLInputElement;
    setKcal(Math.round((Number(modalInput.value) / 100) * data.calories_100g));
    setProteins(
      Math.round((Number(modalInput.value) / 100) * data.proteins_100g),
    );
    setFats(Math.round((Number(modalInput.value) / 100) * data.fat_100g));
    setCarbs(Math.round((Number(modalInput.value) / 100) * data.carbs_100g));
  };

  const addEventMeal = async () => {
    const modalInput = document.querySelector(
      ".modal__input",
    ) as HTMLInputElement;
    if (modalInput.value.length > 0) {
      await eventMealController.addEvent(
        {
          name: mealType,
          startTime: eventTime(new Date().toString()),
          weight: Number(modalInput.value),
          description: "",
        },
        data,
      );
      const modal = document.querySelector(".product-modal") as HTMLElement;
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
    }
  };

  return (
    <BasicModalComponent title={data.name} className="product-modal">
      <div className="modal__container">
        <div>
          <RegInput
            className="modal__input"
            type="number"
            placeholder="100"
            onChange={updateModalData}
          />
          <span className="modal__span">&nbsp;{t("g")}</span>
        </div>
        <div className="modal__arrow-icon" />
        <div className="modal__span__disabled">
          {kcal} {t("modal__kcal")}
        </div>
      </div>
      <div className="modal__nutritions">
        <div className="modal__container">
          <span className="modal__span">{t("main_proteins")}</span>
          <div className="modal__span__disabled">
            {proteins} {t("g")}
          </div>
        </div>
        <div className="modal__container">
          <span className="modal__span">{t("main_fats")}</span>
          <div className="modal__span__disabled">
            {fats} {t("g")}
          </div>
        </div>
        <div className="modal__container">
          <span className="modal__span">{t("main_carbs")}</span>
          <div className="modal__span__disabled">
            {carbs} {t("g")}
          </div>
        </div>
      </div>
      <ButtonTemplate className="modal__button" onClick={addEventMeal}>
        {t("add_button")}
      </ButtonTemplate>
    </BasicModalComponent>
  );
};

export default ProductModal;
