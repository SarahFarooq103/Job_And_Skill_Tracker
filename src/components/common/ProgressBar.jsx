import React from "react";

const ProgressBar = ({ progress = 0 ,
  showLabel = false,
  size = "default",
}) => {
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const sizes = {
    small: "h-1.5",
    default: "h-2",
    large: "h-3",
  };
  return (
    <div className="w-full">
      <div
        className={`
          w-full
          overflow-hidden
          rounded-full
          bg-slate-200
          ${sizes[size]}
        `}
      >
        <div
          className="
            h-full
            rounded-full
            bg-indigo-600
            transition-all
            duration-500
          "
          style={{ width: `${safeProgress}%` }}
        />
      </div>

      {showLabel && (
        <div className="mt-1.5 flex justify-end">
          <span className="text-xs font-medium text-slate-500">
            {safeProgress}%
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
