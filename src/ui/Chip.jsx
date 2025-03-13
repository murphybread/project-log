import React from "react";
import { useTheme } from "@store/themeStore";

const Chip = ({
  variant = "default",
  size = "md",
  onClick,
  onDelete,
  icon,
  rightIcon, // 새로운 prop 추가
  label,
  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("chip", "base"));
  const variantClasses = useTheme((state) => state.getComponentStyle("chip", `variant_${variant}`));
  const sizeClasses = useTheme((state) => state.getComponentStyle("chip", `size_${size}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses}
        ${sizeClasses}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      <span className="w-4 h-4 flex items-center justify-center mr-1">{icon && React.isValidElement(icon) ? icon : null}</span>
      <span>{label}</span>
      <span className="w-4 h-4 flex items-center justify-center ml-1">{rightIcon && React.isValidElement(rightIcon) ? rightIcon : null}</span>
      {onDelete && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="ml-2 -mr-1 h-4 w-4 rounded-full flex items-center justify-center hover:bg-black hover:bg-opacity-10"
        >
          <span className="sr-only">Remove</span>
        </button>
      )}
    </div>
  );
};

export default Chip;
