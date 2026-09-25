import React from "react";

const Card = ({ children, className = "", hover = false }) => {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-200 ${hover ? "hover:-translate-y-0.5 hover:shadow-md" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
