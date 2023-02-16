import React from "react";
import { useAppContext } from "../hooks/useAppContext";
import CocktailCard from "./CocktailCard";

const Favourite = () => {
  const { favourites } = useAppContext();

  return (
    <div className="max-w-[1200px] mx-auto space-y-10">
      <h1 className="text-3xl font-semibold text-gray-600 text-center sm:text-left my-2">
        My favourites
      </h1>
      <div className="max-w-[1200px] mx-auto px-4 space-y-10">
        {favourites ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            {Object.values(favourites).map((cocktail) => (
              <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
            ))}
          </div>
        ) : (
          <div data-testid="no-fav">No favourites cocktails</div>
        )}
      </div>
    </div>
  );
};

export default Favourite;
