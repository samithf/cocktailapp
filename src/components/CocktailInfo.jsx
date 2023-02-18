import React from "react";
import { useLocation } from "react-router-dom";

const CocktailInfo = () => {
  const location = useLocation();
  const cocktail = location.state;

  const getAllIngredients = () => {
    return [...Array(15).keys()]
      .map((index) => ({
        name: cocktail[`strIngredient${index + 1}`],
        image: `https://thecocktaildb.com/images/ingredients/${
          cocktail[`strIngredient${index + 1}`]
        }-Small.png`,
      }))
      .filter((item) => Boolean(item.name));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 space-y-10">
      <div className="flex flex-col md:flex-row">
        <div>
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="object-cover aspect-square bg-gray-100 rounded-md md:min-w-[300px] md:max-w-[400px]"
          />
        </div>
        <div className="py-10 md:py-0 md:px-10">
          <h1 className="text-2xl font-semibold mb-4 underline decoration-sky-500 decoration-4">
            {cocktail.strDrink}
          </h1>
          <h3 className="text-xl font-semibold my-4">Ingredients</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {getAllIngredients().map((ingredient) => (
              <div key={ingredient.name}>
                <img src={ingredient.image} />
                <p className="text-center">{ingredient.name}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold my-4">Instructions to make</h3>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default CocktailInfo;
