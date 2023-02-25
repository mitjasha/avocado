import React from "react";
import { Product, EProductCategory } from "../../api/api.interface";
import "./ProductCard.scss";

interface ProductProps {
  data: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductProps> = ({ data, onClick }) => {
  return (
    <button type="button" className="card__container" onClick={onClick}>
      <div
        style={{
          backgroundImage: `url("${
            EProductCategory[data.category as keyof typeof EProductCategory]
          }")`,
        }}
        className="card__container__image"
      />
      <span className="card__container__span">{data.name}</span>
    </button>
  );
};

export default ProductCard;
