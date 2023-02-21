import React, { useState } from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import { Product } from "../../api/api.interface";
import "./ProductModal.scss";

interface ProductProps {
  data: Product;
}

const ProductModal: React.FC<ProductProps> = ({ data }) => {
  const [kcal, setKcal] = useState<number>(Number(data.calories_100g));
  const [proteins, setProteins] = useState<number>(Number(data.proteins_100g));
  const [fats, setFats] = useState<number>(Number(data.fat_100g));
  const [carbs, setCarbs] = useState<number>(Number(data.carbs_100g));

  const updateModalData = () => {
    const modalInput = document.querySelector(
      ".modal__input",
    ) as HTMLInputElement;
    setKcal(
      Math.round((Number(modalInput.value) / 100) * Number(data.calories_100g)),
    );
    setProteins(
      Math.round((Number(modalInput.value) / 100) * Number(data.proteins_100g)),
    );
    setFats(
      Math.round((Number(modalInput.value) / 100) * Number(data.fat_100g)),
    );
    setCarbs(
      Math.round((Number(modalInput.value) / 100) * Number(data.carbs_100g)),
    );
  };

  return (
    <BasicModalComponent title={data.name} className="product-modal">
      <div className="modal__container">
        <div>
          <RegInput
            className="modal__input"
            type="number"
            placeholder="100"
            defaultValue={100}
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
      <ButtonTemplate className="modal__button">Add</ButtonTemplate>
    </BasicModalComponent>
  );
};

export default ProductModal;
