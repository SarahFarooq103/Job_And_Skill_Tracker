import React from "react";

const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-full
        px-5
        py-2.5
        rounded-lg
        bg-indigo-600
        text-white
        font-medium
        transition
        duration-200
        hover:bg-indigo-700
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

export default Button;
