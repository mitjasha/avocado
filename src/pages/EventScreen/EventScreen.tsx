import React from "react";
import { useParams } from "react-router-dom";
import products from "../../assets/products.json";
import RegInput from "../../components/RegInput/RegInput";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import "./EventScreen.scss";
import "../../index.scss";

const EventScreen: React.FC = () => {
  const { type } = useParams();
  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <BackButton />
          <h1 className="event__screen__h1">{type}</h1>
          <div className="event__screen__header__add" />
        </div>
        <div className="event__screen__search">
          <div className="event__screen__search__icon" />
          <RegInput
            type="search"
            placeholder="What have you eaten?"
            className="event__screen__input"
          />
          <div className="event__screen__close__icon" />
        </div>
        <h3 className="event__main__h3">Found:</h3>
        <div className="no__found">
          <span className="no__found__text">No products found</span>
          <div className="no__found__image" />
        </div>
        <div className="event__screen__main">
          {products.products.map((item) => (
            <ProductCard data={item} key={products.products.indexOf(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventScreen;
