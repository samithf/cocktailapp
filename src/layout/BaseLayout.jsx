import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const BaseLayout = () => {
  return (
    <div className="h-full">
      <Nav />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
