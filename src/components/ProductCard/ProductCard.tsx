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
}

const ProductCard: React.FC<ProductProps> = ({ data }) => {
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

export default ProductCard;
