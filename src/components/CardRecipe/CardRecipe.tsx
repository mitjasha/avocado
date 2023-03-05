import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { RecipeResponse } from "../../api/api.interface";
import profileController from "../../api/profile.controller";
import "./CardRecipe.scss";

export interface CardRecipesProps {
  data: RecipeResponse;
}

const CardRecipe: React.FC<CardRecipesProps> = ({ data }) => {
  const setLike = async () => {
    const profile = await profileController.getProfile();

    if (profile) {
      if (
        profile[0].favorites != null &&
        profile[0].favorites.includes(data.id as string)
      ) {
        document.getElementById(data.id)?.classList.add("like");
      } else {
        document.getElementById(data.id)?.classList.remove("like");
      }
    }
  };

  useEffect(() => {
    setLike();
  }, []);

  const addFavorite = async () => {
    const profile = await profileController.getProfile();
    let { favorites } = profile[0];
    if (favorites == null) {
      favorites = [];
    }
    if (favorites.includes(data.id as string)) {
      const index = favorites.indexOf(data.id as string);
      favorites.splice(index, 1);
    } else {
      favorites.push(data.id as string);
    }

    if (profile) {
      if (
        profile[0].favorites != null &&
        profile[0].favorites.includes(data.id as string)
      ) {
        document.getElementById(data.id)?.classList.add("like");
      } else {
        document.getElementById(data.id)?.classList.remove("like");
      }
    }

    await profileController.updateProfile({
      id: profile[0].id,
      gender: profile[0].gender,
      goal: profile[0].goal,
      birth: profile[0].birth,
      favorites,
    });
  };

  const { t } = useTranslation();

  return (
    <div className="recipe__wrapper">
      <div className="recipe__card__bg__like">
        <button
          type="button"
          className="recipe__card__like"
          aria-label="like"
          id={data.id}
          onClick={addFavorite}
        />
      </div>
      <Link to={`/recipe/${data.id}`} key={data.id}>
        <div
          className="recipe__card__img"
          style={{ backgroundImage: `url(${data.imageURL})` }}
        />
        <div className="recipe__card__wrapper">
          <h3 className="recipe__card__h3">{data.name}</h3>
          <div className="recipe__data">
            <div className="recipe__data__calories">
              <div className="recipe__data__img__calories" />
              <span className="recipe__data__span">
                {data.calories} {t("recipe_kal")}
              </span>
            </div>
            <div className="recipe__data__time">
              <div className="recipe__data__img__time" />
              <span className="recipe__data__span">
                {data.time} {t("min")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardRecipe;
