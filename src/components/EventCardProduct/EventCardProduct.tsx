import React from "react";
import "./EventCardProduct.scss";

interface Product {
  name: string;
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
    <div className="card__container container">
      <div
        style={{ backgroundImage: `url("${data.image}")` }}
        className="card__container__image"
      />
      <span className="card__container__span">{data.name}</span>
    </div>
  );
};

const EventCardProductModal: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="card__container__modal__bg">
      <div className="card__container__modal container">
        <div className="modal__close" />
        <h2 className="modal__h2">{data.name}</h2>
        <div
          className="modal__image"
          style={{ backgroundImage: `url("${data.image}")` }}
        />
        <div className="modal__kcal">
          <input className="modal__input" type="number" placeholder="100" />
          <span className="modal__span">g</span>
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
            <div className="modal__span__disabled modal__carbs">
              {data.carbs}
            </div>
            <span className="modal__span">g</span>
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
