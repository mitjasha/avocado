import React from "react";
import { Product, EProductCategory } from "../../api/api.interface";
import "./ProductCard.scss";

interface ProductProps {
  data: Product;
  onClick?: () => void;
}

const productArray = [
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

const ProductCard: React.FC<ProductProps> = ({ data, onClick }) => {
  return (
    <button type="button" className="card__container" onClick={onClick}>
      <div
        style={{
          backgroundImage: `url("${
            EProductCategory[
              Object.keys(EProductCategory)[
                productArray.indexOf(data.category)
              ] as keyof typeof EProductCategory
            ]
          }")`,
        }}
        className="card__container__image"
      />
      <span className="card__container__span">{data.name}</span>
    </button>
  );
};

export default ProductCard;
