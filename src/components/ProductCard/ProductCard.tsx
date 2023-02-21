import React from "react";
import "./ProductCard.scss";

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
  onClick?: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ data, onClick }) => {
  return (
    <button type="button" className="card__container" onClick={onClick}>
      <div
        style={{ backgroundImage: `url("${data.image}")` }}
        className="card__container__image"
      />
      <span className="card__container__span">{data.namEng}</span>
    </button>
  );
};

export default ProductCard;
