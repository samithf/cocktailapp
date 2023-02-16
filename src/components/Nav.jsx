import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

const Nav = () => {
  const { favourites } = useAppContext();

  return (
    <div className="bg-white mb-20 p-5 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center">
        <Link to="/">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="https://www.thecocktaildb.com/images/media/drink/yrqppx1478962314.jpg"
          />
        </Link>
        <ul className="flex ml-auto gap-5 text-gray-500">
          <li className="cursor-pointer">
            <Link to="/search">Search</Link>
          </li>
          <li className="cursor-pointer">
            <Link to="/favourite">
              {favourites && Object.keys(favourites).length ? (
                <>
                  <span className="inline-block w-[20px] h-[20px] text-center mr-1 rounded-full text-white bg-red-500">
                    {Object.keys(favourites).length}
                  </span>
                  <span>Favourites</span>
                </>
              ) : (
                "Favourites"
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
