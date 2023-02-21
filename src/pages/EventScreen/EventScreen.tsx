/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useParams, useSearchParams } from "react-router-dom";
import products from "../../assets/products.json";
import RegInput from "../../components/Inputs/BaseInput/BaseInput";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import AddProductModal from "../../containers/AddProductModal/AddProductModal";
import "./EventScreen.scss";
import "../../index.scss";

const EventScreen: React.FC = () => {
  const { type } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams("");
  const text = searchQuery.get("search");

  const openAddProductModal = () => {
    const modal = document.querySelector(".add-product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  const textSearch = (currentText: string) => {
    const filterProducts = products.products.filter(
      (item) =>
        item.categoryEn.toLowerCase().includes(currentText.toLowerCase()) ||
        item.categoryRu.toLowerCase().includes(currentText.toLowerCase()) ||
        item.name.toLowerCase().includes(currentText.toLowerCase()) ||
        item.namEng.toLowerCase().includes(currentText.toLowerCase()),
    );

    ReactDOM.render(
      filterProducts.map((item) => (
        <ProductCard data={item} key={filterProducts.indexOf(item)} />
      )),
      document.querySelector(".event__screen__main"),
    );
  };

  useEffect(() => {
    text ? textSearch(text) : textSearch("");
  }, [text]);

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
            placeholder="What have you eaten?"
            value={String(text)}
            className="event__screen__input"
            onChange={(event) => {
              textSearch((event.target as HTMLInputElement).value);
              setSearchQuery({
                search: (event.target as HTMLInputElement).value,
              });
            }}
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
      <AddProductModal />
    </div>
  );
};
export default EventScreen;
