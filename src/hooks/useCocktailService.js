import { useState } from "react";
import { useEffectAfterMount } from "./useEffectAfterMount";
import api from "../api";

export const useCocktailService = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const urls = Array(8).fill(`${import.meta.env.VITE_API_ENDPOINT}/random.php`);

  useEffectAfterMount(() => {
    setIsFetching(true);
    getRandomDrinks().then((cocktails) => {
      setCocktails(cocktails);
      setIsFetching(false);
    });
  }, []);

  const getRandomDrinks = async () => {
    const cocktails = [];
    const requests = urls.map((url) => api.get(url));

    const randomCocktails = await Promise.all(requests).then((responses) => {
      responses.forEach((resp) => {
        cocktails.push(resp.data.drinks[0]);
      });
      return cocktails;
    });
    return randomCocktails;
  };

  const refreshCocktails = () => {
    setIsFetching(true);
    getRandomDrinks().then((cocktails) => {
      setCocktails(cocktails);
      setIsFetching(false);
    });
  };

  return { cocktails, isFetching, refreshCocktails };
};
