import { createContext, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [favourites, setFavourties] = useState(null);

  const addToFavourite = (item) => {
    setFavourties((previtems) => {
      return { ...previtems, [item.idDrink]: item };
    });
  };

  const removeFromFavourite = (itemId) => {
    setFavourties((prevItems) => {
      const { [itemId]: value, ...otherItems } = prevItems;
      return otherItems;
    });
  };

  return (
    <AppContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </AppContext.Provider>
  );
};
