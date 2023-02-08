import React from "react";
import "./EventCardProduct.scss";

interface Product {
  name: string;
  image: string;
}

interface ProductProps {
  data: Product;
}

const EventCardProduct: React.FC<ProductProps> = ({ data }) => {
  return (
    <div className="card__container container">
      <div
        className="card__container__image"
        style={{ background: `url(${data.image}) cover no-repeat` }}
      />
      <span className="card__container__span">{data.name}</span>
    </div>
  );
};

export default EventCardProduct;
