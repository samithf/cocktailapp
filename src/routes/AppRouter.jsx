import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import CocktailList from "../components/CocktailList";
import Favourite from "../components/Favourite";
import SeachCocktails from "../components/SeachCocktails";
import BaseLayout from "../layout/BaseLayout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<CocktailList />} />
          <Route path="/search" element={<SeachCocktails />} />
          <Route path="/favourite" element={<Favourite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
