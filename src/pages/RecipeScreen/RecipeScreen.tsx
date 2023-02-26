import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeResponse } from "../../api/api.interface";
import profileController from "../../api/profile.controller";
import recipesController from "../../api/recipes.controller";
import "./RecipeScreen.scss";

const RecipeScreen: React.FC = () => {
  const [recipe, setRecipe] = useState<RecipeResponse>();
  const { id } = useParams();

  const setLike = async () => {
    const profile = await profileController.getProfile();

    if (profile) {
      if (
        profile[0].favorites != null &&
        profile[0].favorites.includes(id as string)
      ) {
        document.querySelector(".recipe__favorite")?.classList.add("like");
      } else {
        document.querySelector(".recipe__favorite")?.classList.remove("like");
      }
    }
  };

  const getRecipe = async () => {
    const result = await recipesController.getRecipeById(id as string);
    if (result) {
      setRecipe(result);
    }

    await setLike();
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const addFavorite = async () => {
    const profile = await profileController.getProfile();
    let { favorites } = profile[0];
    if (favorites == null) {
      favorites = [];
    }
    if (favorites.includes(id as string)) {
      const index = favorites.indexOf(id as string);
      favorites.splice(index, 1);
    } else {
      favorites.push(id as string);
    }

    if (profile) {
      if (
        profile[0].favorites != null &&
        profile[0].favorites.includes(id as string)
      ) {
        document.querySelector(".recipe__favorite")?.classList.add("like");
      } else {
        document.querySelector(".recipe__favorite")?.classList.remove("like");
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

  return (
    <div className="recipe__screen">
      <div className="container">
        <div
          className="recipe__image"
          style={{
            backgroundImage: `url(${recipe?.imageURL})`,
          }}
        >
          <button
            type="button"
            className="recipe__favorite"
            aria-label="like"
            onClick={addFavorite}
          />
        </div>
        <div className="recipe__info">
          <ul className="recipe__info__ul">
            <li className="recipe__info__li">
              <span className="recipe__info__span">Kcal:</span>
              <span>{recipe?.calories}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Protein:</span>
              <span>{recipe?.proteins}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Fat:</span>
              <span>{recipe?.fats}</span>
            </li>
            <li className="recipe__info__li">
              <span className="recipe__info__span">Carbs:</span>
              <span>{recipe?.carbs}</span>
            </li>
          </ul>
        </div>
        <div className="recipe__cook container">
          <h2 className="recipe__cook__h2">{recipe?.name}</h2>
          <span className="recipe__cook__span">INGREDIENTS:</span>
          <ul className="ingredients">
            {recipe?.ingredients.map((item) => (
              <li className="ingredients__li" key={item.name}>
                {item.quantity} {item.name}
              </li>
            ))}
          </ul>
          <span className="recipe__cook__span">METHOD:</span>
          <ul className="steps">
            {recipe?.steps.map((item) => (
              <li className="steps__li" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe__time container">
          <div className="recipe__time__icon" />
          <span className="recipe__time__text">{recipe?.time} MIN</span>
        </div>
      </div>
    </div>
  );
};
export default RecipeScreen;
