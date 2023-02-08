import React from "react";
import "./EventCardProduct.scss";

interface ProductProps {
  name: string;
  // proteins: string;
  // fats: string;
  // carbs: string;
  // kcal: string;
  image: string;
}

const EventCardProduct: React.FC<ProductProps> = ({ name, image }) => {
  return (
    <div className="card__container">
      <div
        className="card__container__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <span className="card__container__span">{name}</span>
    </div>
  );
};

export default EventCardProduct;
