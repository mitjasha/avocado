import React, { useState } from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import { ProductRequest } from "../../api/api.interface";
import "./ProductModal.scss";
import eventMealController from "../../api/event-meal.controller";

interface ProductProps {
  data: ProductRequest;
  mealType: string;
}

const ProductModal: React.FC<ProductProps> = ({ data, mealType }) => {
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

  const month =
    new Date().getMonth() > 9
      ? `${new Date().getMonth() + 1}`
      : `0${new Date().getMonth() + 1}`;

  const time = `${new Date().getFullYear()}-${month}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;

  const addEventMeal = async () => {
    const modalInput = document.querySelector(
      ".modal__input",
    ) as HTMLInputElement;
    if (modalInput.value.length > 0) {
      await eventMealController.addEvent(
        {
          name: mealType,
          startTime: time,
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

  // useEffect(() => {
  //   setKcal(data.calories_100g);
  // }, []);

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
          <span className="modal__span">&nbsp;g</span>
        </div>
        <div className="modal__arrow-icon" />
        <div className="modal__span__disabled">{kcal} kcal</div>
      </div>
      <div className="modal__nutritions">
        <div className="modal__container">
          <span className="modal__span">Proteins</span>
          <div className="modal__span__disabled">{proteins} g</div>
        </div>
        <div className="modal__container">
          <span className="modal__span">Fats</span>
          <div className="modal__span__disabled">{fats} g</div>
        </div>
        <div className="modal__container">
          <span className="modal__span">Carbs</span>
          <div className="modal__span__disabled">{carbs} g</div>
        </div>
      </div>
      <ButtonTemplate className="modal__button" onClick={addEventMeal}>
        Add
      </ButtonTemplate>
    </BasicModalComponent>
  );
};

export default ProductModal;
