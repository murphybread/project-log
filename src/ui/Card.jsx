import React from "react";
import { useTheme } from "@store/themeStore";

const Card = ({
  children,
  display = "inline-block",
  ellaboration = 2,
  fontSize = "md",
  className = "",

  ...props
}) => {
  const buttonText = children || "Card";

  const baseClasses = useTheme((state) => state.getComponentStyle("card")["base"]);
  const basePseudoClasses = useTheme((state) => state.getComponentStyle("card")["basePseudo"]);
  const ellaborationClasses = useTheme((state) => state.getComponentStyle("card")[ellaboration]);

  const sizeClasses = useTheme((state) => state.getComponentStyle("button")[fontSize]);

  return (
    <div
      className={`
        ${baseClasses}
        ${basePseudoClasses}
        ${display}
        ${ellaborationClasses}
        ${sizeClasses}
        ${className}
      `}
      {...props}
    >
      {buttonText}
    </div>
  );
};

export default Card;
