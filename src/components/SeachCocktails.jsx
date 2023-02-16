import React, { useState } from "react";
import Button from "./elements/Button";
import TextField from "./elements/TextField";
import api from "../api";
import CocktailCard from "./CocktailCard";

const SeachCocktails = () => {
  const [searchKey, setSearchKey] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const onClickSearch = () => {
    if (!searchKey.trim()) return;
    setIsFetching(true);
    api.get(`/search.php?s=${searchKey}`).then((response) => {
      setCocktails(response.data.drinks ?? []);
      setIsFetching(false);
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 space-y-10">
      <div className="flex flex-col md:flex-row md:justify-center gap-2">
        <TextField
          placeholder="Search cocktails"
          onChange={(e) => setSearchKey(e.target.value)}
          data-testid="search-input"
        ></TextField>
        <Button onClick={onClickSearch} data-testid="search-btn">
          Search
        </Button>
      </div>
      {isFetching ? (
        <div
          className="border h-[500px] bg-white flex justify-center items-center"
          data-testid="loading-content"
        >
          Loading...
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2"
          data-testid="results"
        >
          {cocktails.map((cocktail) => (
            <CocktailCard cocktail={cocktail} key={cocktail.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SeachCocktails;
