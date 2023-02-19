import React from "react";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./ProductModal.scss";

interface Product {
  name: string;
  namEng: string;
  proteins: string;
  fats: string;
  carbs: string;
  kcal: string;
  image: string;
}

interface ProductProps {
  data: Product;
}

const ProductModal: React.FC<ProductProps> = ({ data }) => {
  return (
    <BasicModalComponent title={data.namEng}>
      <div className="modal__container">
        <div>
          <RegInput className="modal__input" type="number" placeholder="100" />
          <span className="modal__span">&nbsp;g</span>
        </div>
        <div className="modal__arrow-icon" />
        <div className="modal__span__disabled">{data.kcal} kcal</div>
      </div>
      <div className="modal__nutritions">
        <div className="modal__container">
          <span className="modal__span">Proteins</span>
          <div className="modal__span__disabled">{data.proteins} g</div>
        </div>
        <div className="modal__container">
          <span className="modal__span">Fats</span>
          <div className="modal__span__disabled">{data.fats} g</div>
        </div>
        <div className="modal__container">
          <span className="modal__span">Carbs</span>
          <div className="modal__span__disabled">{data.carbs} g</div>
        </div>
      </div>
      <ButtonTemplate className="modal__button">Add</ButtonTemplate>
    </BasicModalComponent>
  );
};

export default ProductModal;
