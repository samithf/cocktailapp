import React from "react";
import CocktailCard from "./CocktailCard";
import Button from "./elements/Button";
import { useCocktailService } from "../hooks/useCocktailService";

const CocktailList = () => {
  const { cocktails, refreshCocktails, isFetching } = useCocktailService();

  return (
    <div className="max-w-[1200px] mx-auto px-4 space-y-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-3xl font-semibold text-gray-600 text-center sm:text-left my-2">
          Popular Drinks
        </h1>
        <Button onClick={refreshCocktails} data-testid="refresh-btn">
          Refresh
        </Button>
      </div>
      <div>
        {isFetching ? (
          <div
            className="border h-[500px] bg-white flex justify-center items-center"
            data-testid="loading-section"
          >
            Loading...
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
            data-testid="card-list"
          >
            {cocktails.map((cocktail) => (
              <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CocktailList;
