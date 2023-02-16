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
  return (
    <div className="card__container__modal__bg">
      <div className="card__container__modal container">
        <div className="modal__close" />
        <h2 className="modal__h2">Add new product</h2>
        <div className="add__containter">
          <div className="add__param">
            <span>Category:</span>
            <span>Name:</span>
            <span>100 g:</span>
            <span>Proteins:</span>
            <span>Fats:</span>
            <span>Carbs:</span>
          </div>
          <div className="add__values">
            <select className="add__select">
              <option>milk</option>
              <option>bakery</option>
              <option>oil/butter</option>
              <option>porrige</option>
              <option>vegetable</option>
              <option>fruit</option>
              <option>dried fruit</option>
              <option>bean</option>
              <option>meat</option>
              <option>sausage</option>
              <option>fish</option>
              <option>nut</option>
              <option>candy</option>
            </select>
            <input
              className="add__input add__text"
              type="text"
              placeholder="enter a name"
            />
            <div className="add__input__container">
              <input
                className="add__input add__number"
                type="number"
                placeholder="kcal per 100 g"
              />
              <span>kcal</span>
            </div>
            <div className="add__input__container">
              <input
                className="add__input add__number"
                type="number"
                placeholder="proteins per 100 g"
              />
              <span>g</span>
            </div>
            <div className="add__input__container">
              <input
                className="add__input add__number"
                type="number"
                placeholder="fats per 100 g"
              />
              <span>g</span>
            </div>
            <div className="add__input__container">
              <input
                className="add__input add__number"
                type="number"
                placeholder="carbs per 100 g"
              />
              <span>g</span>
            </div>
          </div>
        </div>
        <button type="button" className="modal__button">
          Add
        </button>
      </div>
    </div>
  );
};

export default EventCardProduct;
