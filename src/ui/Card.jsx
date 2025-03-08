import React from "react";
import { useTheme } from "@store/themeStore";

const Card = ({
  children,
  display = "inline-block",
  elevation = 2,
  fontSize = "md",
  variant = "default",
  height = "sm",
  className = "",

  ...props
}) => {
  const cardText = children;

  const baseClasses = useTheme((state) => state.getComponentStyle("card", "base"));
  const baseEffectClasses = useTheme((state) => state.getComponentStyle("card", "baseEffect"));
  const displayClasses = useTheme((state) => state.getComponentStyle("card", `display_${display}`));
  const elevationClasses = useTheme((state) => state.getComponentStyle("card", `elevation_${elevation}`));
  const variantClasses = useTheme((state) => state.getComponentStyle("card", `variant_${variant}`));
  const fontSizeClasses = useTheme((state) => state.getComponentStyle("card", `fontSize_${fontSize}`));
  const heightClasses = useTheme((state) => state.getComponentStyle("card", `height_${height}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${displayClasses}
        ${baseEffectClasses}
        ${variantClasses}
        ${fontSizeClasses}
        ${elevationClasses}
        ${heightClasses}
        ${className}  
      `}
      {...props}
    >
      {cardText}
    </div>
  );
};

export default Card;
