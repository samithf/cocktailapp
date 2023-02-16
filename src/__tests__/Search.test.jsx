import { expect, test } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import SeachCocktails from "../components/SeachCocktails";
import { AppContext } from "../context/appContext";

test("displays input and search fields", async () => {
  const searchElement = render(
    <StaticRouter>
      <SeachCocktails />
    </StaticRouter>
  );

  const searchInput = searchElement.getByTestId("search-input");
  const searchBtn = searchElement.getByTestId("search-btn");

  expect(searchInput).toBeDefined();
  expect(searchBtn).toBeDefined();

  searchElement.unmount();
});

test("by default input value is empty", async () => {
  const searchElement = render(
    <StaticRouter>
      <SeachCocktails />
    </StaticRouter>
  );

  const emailInput = searchElement.getByRole("textbox");
  expect(emailInput).toBeDefined();
  expect(emailInput.value).toBe("");

  searchElement.unmount();
});

test("by default input value is empty", async () => {
  const wrapper = ({ children }) => (
    <AppContext.Provider value={{ favourites: null }}>
      {children}
    </AppContext.Provider>
  );

  const searchElement = render(
    <StaticRouter>
      <SeachCocktails />
    </StaticRouter>,
    { wrapper }
  );

  const searchInput = searchElement.getByTestId("search-input");
  const searchBtn = searchElement.getByTestId("search-btn");

  fireEvent.change(searchInput, { target: { value: "cool" } });
  fireEvent.click(searchBtn);

  const loadingScreen = searchElement.getByTestId("loading-content");
  expect(loadingScreen).toBeDefined();

  await waitFor(() => {
    expect(searchElement.getByTestId("results")).toBeDefined();
    expect(searchElement.getAllByTestId("card")).toHaveLength(7);
  });

  searchElement.unmount();
});
