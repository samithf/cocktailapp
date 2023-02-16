import { expect, test } from "vitest";
import { render, waitFor } from "@testing-library/react";
import CocktailList from "../components/CocktailList";
import { StaticRouter } from "react-router-dom/server";
import { AppContext } from "../context/appContext";

test("displays refresh button", async () => {
  const cocktailList = render(
    <StaticRouter>
      <CocktailList />
    </StaticRouter>
  );

  const refreshBtn = await cocktailList.findByTestId("refresh-btn");
  expect(refreshBtn).toBeDefined();
  cocktailList.unmount();
});

test("should show card list initially", async () => {
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ favourites: null }}>
      {children}
    </AppContext.Provider>
  );

  const element = render(
    <StaticRouter>
      <CocktailList />
    </StaticRouter>,
    { wrapper }
  );

  await waitFor(() => {
    expect(element.getByTestId("card-list")).toBeDefined();
  });
  element.unmount();
});
