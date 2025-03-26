// Input.jsx
import React from "react";
import { useTheme } from "@store/themeStore";

const Input = ({
  type = "text",
  variant = "outlined",
  size = "md",
  color = "default",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  error = false,
  fullWidth = false,
  startIcon,
  endIcon,
  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("input", "base"));
  const typeClasses = useTheme((state) => state.getComponentStyle("input", `type_${type}`));
  const variantClasses = useTheme((state) => state.getComponentStyle("input", `variant_${variant}`));
  const sizeClasses = useTheme((state) => state.getComponentStyle("input", `size_${size}`));
  const colorClasses = useTheme((state) => state.getComponentStyle("input", `color_${color}`));
  const disabledClasses = useTheme((state) => state.getComponentStyle("input", disabled ? "disabled" : "enabled"));
  const errorClasses = useTheme((state) => state.getComponentStyle("input", error ? "error" : "noError"));
  const fullWidthClasses = useTheme((state) => state.getComponentStyle("input", fullWidth ? "fullWidth" : "defaultWidth"));

  return (
    <div className={`relative ${fullWidthClasses}`}>
      {startIcon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{startIcon}</div>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`
          ${baseClasses}
          ${typeClasses}
          ${variantClasses}
          ${sizeClasses}
          ${colorClasses}
          ${disabledClasses}
          ${errorClasses}
          ${startIcon ? "pl-10" : ""}
          ${endIcon ? "pr-10" : ""}
          ${className}
        `}
        {...props}
      />

      {endIcon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2">{endIcon}</div>}
    </div>
  );
};

export default Input;
