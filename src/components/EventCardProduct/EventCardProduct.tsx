import React from "react";
import BasicModalComponent from "../Modals/BasicModalComponent/BasicModalComponent";
import RegInput from "../RegInput/RegInput";
import "./EventCardProduct.scss";

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

const EventCardProduct: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="card__container">
      <div
        style={{ backgroundImage: `url("${data.image}")` }}
        className="card__container__image"
      />
      <span className="card__container__span">{data.namEng}</span>
    </div>
  );
};

export const EventCardProductModal: React.FC<ProductProps> = ({ data }) => {
  return (
    <BasicModalComponent title={data.namEng}>
      <div className="modal__kcal">
        <div>
          <RegInput className="modal__input" type="number" placeholder="100" />
          <span className="modal__span">&nbsp;g</span>
        </div>
        <div className="modal__to__image" />
        <div className="modal__span__disabled">{data.kcal}</div>
        <span className="modal__span">kcal</span>
      </div>
      <div className="modal__main">
        <div className="modal__main__block">
          <span className="modal__span">Proteins</span>
          <div className="modal__span__disabled modal__proteins">
            {data.proteins}
          </div>
          <span className="modal__span">g</span>
        </div>
        <div className="modal__main__block">
          <span className="modal__span">Fats</span>
          <div className="modal__span__disabled modal__fats">{data.fats}</div>
          <span className="modal__span">g</span>
        </div>
        <div className="modal__main__block">
          <span className="modal__span">Carbs</span>
          <div className="modal__span__disabled modal__carbs">{data.carbs}</div>
          <span className="modal__span">g</span>
        </div>
      </div>
      <button type="button" className="modal__button">
        Add
      </button>
    </BasicModalComponent>
  );
};

export const EventCardProductAdd: React.FC = () => {
  const addProdutFields = [
    "Category",
    "Name",
    "100 g",
    "Proteins",
    "Fats",
    "Carbs",
  ];
  const productCategories = [
    "dairy",
    "pastries",
    "oils",
    "sauces",
    "grains",
    "vegetables",
    "fruits and berries",
    "dried fruits",
    "beans",
    "mushrooms",
    "meat",
    "sausages",
    "smoked meat",
    "fish and seafood",
    "nuts",
    "sweets",
    "pasta",
    "soup",
    "salad",
  ];
  return (
    <BasicModalComponent title="Add new product">
      <div className="add__containter">
        <div className="add__param">
          {addProdutFields.map((item) => {
            return <p key={item}>{`${item}:`}</p>;
          })}
        </div>
        <div className="add__values">
          <select className="add__select">
            {productCategories.map((item) => {
              return <option key={item}>{item}</option>;
            })}
          </select>
          <RegInput
            className="add__input"
            type="text"
            placeholder="Enter a name"
          />
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Kcal per 100 g"
            />
            <span>&nbsp;kcal</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Proteins per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Fats per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
          <div className="add__input__container">
            <RegInput
              className="add__input"
              type="number"
              placeholder="Carbs per 100 g"
            />
            <span>&nbsp;g</span>
          </div>
        </div>
      </div>
      <button type="button" className="modal__button">
        Add
      </button>
    </BasicModalComponent>
  );
};

export default EventCardProduct;
