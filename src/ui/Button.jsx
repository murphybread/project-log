import React, { use } from "react";
import { useTheme } from "@store/themeStore";

const Button = ({
  children,
  variant = "primary",
  fontSize = "md",
  className = "",
  display = "inline-block",

  ...props
}) => {
  const buttonText = children || "Button";

  const baseClasses = useTheme((state) => state.getComponentStyle("button")["base"]);
  const variantClasses = useTheme((state) => state.getComponentStyle("button")[variant]);
  const sizeClasses = useTheme((state) => state.getComponentStyle("button")[fontSize]);

  return (
    <button
      className={`
        ${display}
        ${baseClasses}
        ${variantClasses}
        ${sizeClasses}
        ${className}
      `}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
