import React from "react";
import { useTheme } from "@store/themeStore";

const Card = ({
  children,
  display = "inline-block",
  elevation = 2,
  fontSize = "md",
  variant = "",
  className = "",

  ...props
}) => {
  const cardText = children;

  const baseClasses = useTheme((state) => state.getComponentStyle("card", "base"));
  const baseEffectClasses = useTheme((state) => state.getComponentStyle("card", "baseEffect"));
  const displayClasses = useTheme((state) => state.getComponentStyle("card", `display_${display}`));
  const elevationClasses = useTheme((state) => state.getComponentStyle("card")[elevation]);
  const variantClasses = useTheme((state) => state.getComponentStyle("card", `variant_${variant}`));
  const fontSizeClasses = useTheme((state) => state.getComponentStyle("button", `fontsize_${fontSize}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${displayClasses}
        ${baseEffectClasses}
        ${variantClasses}
        ${fontSizeClasses}
        ${elevationClasses}
        ${className}  
      `}
      {...props}
    >
      {cardText}
    </div>
  );
};

export default Card;
