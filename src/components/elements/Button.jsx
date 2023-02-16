import React from "react";

const Button = ({ children, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className="p-2 px-4 bg-amber-500 text-white rounded-md text-sm disabled:bg-gray-200"
    >
      {children}
    </button>
  );
};

export default Button;
