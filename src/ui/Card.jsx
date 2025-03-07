import React from "react";
import { useTheme } from "@store/themeStore";

const Card = ({
  children,
  display = "inline-block",
  elevation = 2,
  fontSize = "md",
  variant = "shadow",
  className = "",

  ...props
}) => {
  const cardText = children;

  const baseClasses = useTheme((state) => state.getComponentStyle("card")["base"]);
  const basePseudoClasses = useTheme((state) => state.getComponentStyle("card")["basePseudo"]);
  const elevationClasses = useTheme((state) => state.getComponentStyle("card")[elevation]);
  const variantClasses = useTheme((state) => state.getComponentStyle("card")[variant]);

  return (
    <div
      className={`
        ${baseClasses}
        ${basePseudoClasses}
        ${variantClasses}
        ${display}
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
