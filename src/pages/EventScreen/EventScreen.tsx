/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import products from "../../assets/products.json";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import AddProductModal from "../../containers/AddProductModal/AddProductModal";
import "./EventScreen.scss";
import "../../index.scss";

const EventScreen: React.FC = () => {
  const { t } = useTranslation();
  const { type } = useParams();

  const openAddProductModal = () => {
    const modal = document.querySelector(".add-product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <BackButton />
          <h1 className="event__screen__h1">{type}</h1>
          <button
            type="button"
            className="event__screen__header__add"
            aria-label="add product"
            onClick={openAddProductModal}
          />
        </div>
        <div className="event__screen__search">
          <div className="event__screen__search__icon" />
          <RegInput
            type="search"
            placeholder={t("event_input")!}
            className="event__screen__input"
          />
          <div className="event__screen__close__icon" />
        </div>
        <h3 className="event__main__h3">{t("evenr_found")}:</h3>
        <div className="no__found">
          <span className="no__found__text">{t("evenr_no_found")}</span>
          <div className="no__found__image" />
        </div>
        <div className="event__screen__main">
          {products.products.map((item) => (
            <ProductCard data={item} key={products.products.indexOf(item)} />
          ))}
        </div>
      </div>
      <AddProductModal />
    </div>
  );
};
export default EventScreen;
