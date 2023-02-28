import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BasicModalComponent from "../../components/Modals/BasicModalComponent/BasicModalComponent";
import ButtonTemplate from "../../components/Buttons/ButtonTemplate/ButtonTemplate";
import "./AddProductModal.scss";
import { Product } from "../../api/api.interface";
import productsController from "../../api/product.controller";
import ProductInput from "../../components/Inputs/ProductInput/ProductInput";

const AddProductModal: React.FC = () => {
  const { t } = useTranslation();

  const addProdutFields = [
    t("add_modal_category"),
    t("add_modal_name"),
    t("add_modal_100g"),
    t("main_proteins"),
    t("main_fats"),
    t("main_carbs"),
  ];
  const productCategories = [
    "",
    t("dairy"),
    t("pastries"),
    t("oils"),
    t("sauces"),
    t("grains"),
    t("vegetables"),
    t("fruits"),
    t("dried_fruits"),
    t("beans"),
    t("mushrooms"),
    t("meat"),
    t("sausages"),
    t("smoked_meat"),
    t("eggs"),
    t("fish"),
    t("nuts"),
    t("sweets"),
    t("pasta"),
    t("soup"),
    t("salad"),
  ];

  const addProductRequest = async (
    name: Product["name"],
    calories_100g: Product["calories_100g"],
    proteins_100g: Product["proteins_100g"],
    carbs_100g: Product["carbs_100g"],
    fat_100g: Product["fat_100g"],
    category: Product["category"],
  ) => {
    await productsController.addProduct({
      name,
      calories_100g,
      proteins_100g,
      carbs_100g,
      fat_100g,
      category,
    });
  };

  const [name, setName] = useState<string>("");
  const [kcal, setKcal] = useState<number>();
  const [proteins, setProteins] = useState<number>();
  const [fats, setFats] = useState<number>();
  const [carbs, setCarbs] = useState<number>();
  const [category, setCategory] = useState<string>("");

  return (
    <BasicModalComponent
      title={t("add_modal_title")!}
      className="add-product-modal"
    >
      <div className="add__containter">
        <form
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className="add__param">
            {addProdutFields.map((item) => {
              return <p key={item}>{`${item}:`}</p>;
            })}
          </div>
          <div className="add__values">
            <select
              required
              className="add__select"
              value={category}
              onChange={(event) =>
                setCategory((event.target as HTMLSelectElement).value)
              }
            >
              {productCategories.map((item) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            <ProductInput
              className="add__input"
              type="text"
              placeholder={t("placeholder_name")!}
              value={name}
              onChange={(event) =>
                setName((event.target as HTMLInputElement).value)
              }
            />
            <div className="add__input__container">
              <ProductInput
                className="add__input"
                type="number"
                placeholder={t("placeholder_name_kcal")!}
                value={String(kcal)}
                onChange={(event) =>
                  setKcal(Number((event.target as HTMLInputElement).value))
                }
              />
              <span>&nbsp;{t("modal__kcal")}</span>
            </div>
            <div className="add__input__container">
              <ProductInput
                className="add__input"
                type="number"
                placeholder={t("placeholder_name_proteins")!}
                value={String(proteins)}
                onChange={(event) =>
                  setProteins(Number((event.target as HTMLInputElement).value))
                }
              />
              <span>&nbsp;{t("g")}</span>
            </div>
            <div className="add__input__container">
              <ProductInput
                className="add__input"
                type="number"
                placeholder={t("placeholder_name_fats")!}
                value={String(fats)}
                onChange={(event) =>
                  setFats(Number((event.target as HTMLInputElement).value))
                }
              />
              <span>&nbsp;{t("g")}</span>
            </div>
            <div className="add__input__container">
              <ProductInput
                className="add__input"
                type="number"
                placeholder={t("placeholder_name_carbs")!}
                value={String(carbs)}
                onChange={(event) =>
                  setCarbs(Number((event.target as HTMLInputElement).value))
                }
              />
              <span>&nbsp;{t("g")}</span>
            </div>
          </div>
          <ButtonTemplate
            type="submit"
            className="modal__button"
            onClick={() => {
              if (
                name !== "" &&
                String(kcal) !== "" &&
                String(proteins) !== "" &&
                String(carbs) !== "" &&
                String(fats) !== "" &&
                category !== ""
              )
                addProductRequest(
                  name,
                  Number(kcal),
                  Number(proteins),
                  Number(carbs),
                  Number(fats),
                  category,
                );
            }}
          >
            {t("add_button")}
          </ButtonTemplate>
        </form>
      </div>
    </BasicModalComponent>
  );
};

export default AddProductModal;
