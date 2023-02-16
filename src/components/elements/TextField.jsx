import React from "react";

const TextField = (props) => {
  return (
    <input
      type="text"
      className="bg-white p-2 px-4 rounded-md border"
      {...props}
    ></input>
  );
};

export default TextField;
