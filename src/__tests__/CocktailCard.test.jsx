import { expect, test, vi } from "vitest";
import { render, waitFor, fireEvent } from "@testing-library/react";
import CocktailCard from "../components/CocktailCard";
import { StaticRouter } from "react-router-dom/server";
import { AppContext } from "../context/appContext";

const cocktails = {
  11983: {
    strDrink: "Quaker's Cocktail",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
    strCategory: "ordinary Drink",
    idDrink: "11983",
  },
  11984: {
    strDrink: "Quaker's Cocktail",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
    strCategory: "ordinary Drink",
    idDrink: "11984",
  },
  11985: {
    strDrink: "Quaker's Cocktail",
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg",
    strCategory: "ordinary Drink",
    idDrink: "11985",
  },
};

const addToFavourite = vi.fn();
const removeFromFavourite = vi.fn();

test("displays relavant fields", async () => {
  const cocktailCard = render(
    <AppContext.Provider value={{ favourites: null }}>
      <StaticRouter>
        <CocktailCard cocktail={cocktails["11983"]} />
      </StaticRouter>
    </AppContext.Provider>
  );

  const card = await cocktailCard.findByTestId("card");
  const name = await cocktailCard.findByTestId("cocktail-name");
  const category = await cocktailCard.findByTestId("cocktail-category");
  const image = await cocktailCard.findByTestId("cocktail-image");

  expect(card).toBeDefined();
  expect(name).toBeDefined();
  expect(name.innerText).toBe(cocktails["11983"].strDrink);
  expect(category).toBeDefined();
  expect(category.innerText).toBe(cocktails["11983"].strCategory);
  expect(image).toBeDefined();
  expect(image.src).toContain(cocktails["11983"].strDrinkThumb);

  cocktailCard.unmount();
});

test("able to add fav item", async () => {
  const cocktailCard = render(
    <AppContext.Provider
      value={{ favourites: null, addToFavourite, removeFromFavourite }}
    >
      <StaticRouter>
        <CocktailCard cocktail={cocktails["11983"]} />
      </StaticRouter>
    </AppContext.Provider>
  );

  const emptyBtn = await cocktailCard.findByTestId("empty");
  expect(emptyBtn).toBeDefined();

  fireEvent.click(emptyBtn);

  await waitFor(() => {
    expect(addToFavourite).toHaveBeenCalledOnce();
  });

  cocktailCard.unmount();
});

test("able to remove fav item", async () => {
  const cocktailCard = render(
    <AppContext.Provider
      value={{ favourites: cocktails, addToFavourite, removeFromFavourite }}
    >
      <StaticRouter>
        <CocktailCard cocktail={cocktails["11983"]} />
      </StaticRouter>
    </AppContext.Provider>
  );

  const fillBtn = await cocktailCard.findByTestId("fill");
  expect(fillBtn).toBeDefined();

  fireEvent.click(fillBtn);

  await waitFor(() => {
    expect(removeFromFavourite).toHaveBeenCalledOnce();
  });

  cocktailCard.unmount();
});
