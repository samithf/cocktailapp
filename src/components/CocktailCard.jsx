import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const CocktailCard = ({ cocktail }) => {
  const { favourites, addToFavourite, removeFromFavourite } = useAppContext();

  return (
    <div
      className="m-2 bg-white rounded-md border border-gray-300 cursor-pointer"
      data-testid="card"
    >
      <img
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
        className="object-cover aspect-square bg-gray-100 rounded-t-md"
        data-testid="cocktail-image"
      />
      <div className="p-3 flex items-center">
        <div>
          <p
            className="text-gray-900 font-semibold truncate max-w-[200px]"
            data-testid="cocktail-name"
          >
            {cocktail.strDrink}
          </p>
          <p className="text-gray-500 text-sm" data-testid="cocktail-category">
            {cocktail.strCategory}
          </p>
        </div>
        <div className="ml-auto">
          {favourites && Object.keys(favourites).includes(cocktail.idDrink) ? (
            <HiHeart
              color="red"
              className="ml-auto cursor-pointer"
              size={"28"}
              onClick={() => removeFromFavourite(cocktail.idDrink)}
              data-testid="fill"
            />
          ) : (
            <HiOutlineHeart
              color="red"
              className="ml-auto cursor-pointer"
              size={28}
              onClick={() => addToFavourite(cocktail)}
              data-testid="empty"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
