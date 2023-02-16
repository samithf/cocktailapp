import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import Favourite from "../components/Favourite";
import { AppContext } from "../context/appContext";

const favourites = {
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

test("displays no fav by default", async () => {
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ favourites: null }}>
      {children}
    </AppContext.Provider>
  );

  const cocktailList = render(
    <StaticRouter>
      <Favourite />
    </StaticRouter>,
    { wrapper }
  );

  const noItems = cocktailList.getByTestId("no-fav");
  expect(noItems).toBeDefined();
  cocktailList.unmount();
});

test("displays fav items if it is there", async () => {
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ favourites }}>{children}</AppContext.Provider>
  );

  const cocktailList = render(
    <StaticRouter>
      <Favourite />
    </StaticRouter>,
    { wrapper }
  );

  const cards = cocktailList.getAllByTestId("card");
  expect(cards).toHaveLength(3);
});
