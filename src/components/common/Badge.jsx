import React from "react";

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-indigo-50 text-indigo-700 border-indigo-100",

    success: "bg-green-50 text-green-700 border-green-100",

    warning: "bg-amber-50 text-amber-700 border-amber-100",

    danger: "bg-red-50 text-red-700 border-red-100",

    neutral: "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-3
        py-1
        text-xs
        font-medium
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
