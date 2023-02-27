/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import BackButton from "../../components/Buttons/BackButton/BackButton";
import AddProductModal from "../../containers/AddProductModal/AddProductModal";
import ProductModal from "../../containers/ProductModal/ProductModal";
import "./EventScreen.scss";
import "../../index.scss";
import productsController from "../../api/product.controller";
import { ProductResponse } from "../../api/api.interface";
import ProductInput from "../../components/Inputs/ProductInput/ProductInput";

const EventScreen: React.FC = () => {
  const { t } = useTranslation();
  const { type } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams("");
  const text = searchQuery.get("search");
  const title = [
    ["breakfast", t("main_breakfast")],
    ["lunch", t("main_lunch")],
    ["dinner", t("main_dinner")],
    ["snack", t("main_snack")],
  ];
  const [products, setProducts] = useState<ProductResponse[]>([]);

  const [filtredProducts, setFiltedProducts] = useState<ProductResponse[]>([]);

  const getAllProducts = async () => {
    const result = await productsController.getAllproduct();
    if (result) {
      setProducts(result);
      setFiltedProducts(products);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const openAddProductModal = () => {
    const modal = document.querySelector(".add-product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  const [productData, setProductData] = useState<ProductResponse>({
    name: "name",
    calories_100g: 0,
    proteins_100g: 0,
    carbs_100g: 0,
    fat_100g: 0,
    category: "",
    id: "",
  });

  const openProductModal = (item: ProductResponse) => {
    setProductData(item);
    const modal = document.querySelector(".product-modal") as HTMLElement;
    modal.style.opacity = "1";
    modal.style.visibility = "visible";
  };

  const removeInputText = () => {
    const searchInput = document.querySelector(
      ".event__screen__input",
    ) as HTMLInputElement;
    searchInput.value = "";
    setSearchQuery({
      search: "",
    });
  };

  const textSearch = (currentText: string) => {
    const filtred = products.filter(
      (item) =>
        item.category.toLowerCase().includes(currentText.toLowerCase()) ||
        item.name.toLowerCase().includes(currentText.toLowerCase()),
    );

    setFiltedProducts(filtred);
  };

  useEffect(() => {
    if (text) {
      textSearch(text);
    }
  }, [text]);

  return (
    <div className="event__screen">
      <div className="container">
        <div className="event__screen__header">
          <BackButton to="/main" />
          <h1 className="event__screen__h1">
            {title.filter((item) => item[0] === type)[0][1]}
          </h1>
          <button
            type="button"
            className="event__screen__header__add"
            aria-label="add product"
            onClick={openAddProductModal}
          />
        </div>
        <div className="event__screen__search">
          <div className="event__screen__search__icon" />
          <ProductInput
            type="search"
            placeholder={t("event_input")!}
            value={text !== null ? text : ""}
            className="event__screen__input"
            onChange={(event) => {
              textSearch((event.target as HTMLInputElement).value);
              setSearchQuery({
                search: (event.target as HTMLInputElement).value,
              });
            }}
          />
          <button
            type="button"
            aria-label="clear"
            className="event__screen__close__icon"
            onClick={() => removeInputText()}
          />
        </div>
        <h3 className="event__main__h3">{t("event_found")}:</h3>
        {!filtredProducts.length && (
          <div className="no__found">
            <span className="no__found__text">{t("event_no_found")}</span>
            <div className="no__found__image" />
          </div>
        )}
        <div className="event__screen__main">
          {filtredProducts.map((item) => (
            <ProductCard
              data={item}
              key={products.indexOf(item)}
              onClick={() => openProductModal(item)}
            />
          ))}
        </div>
      </div>
      <AddProductModal />
      <ProductModal data={productData} mealType={type as string} />
    </div>
  );
};
export default EventScreen;
