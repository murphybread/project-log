import React from "react";
import { useTheme } from "@store/themeStore";

const CardContent = ({ children, spacing = "md", disable_spacing = false, className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("cardContent")["base"]);
  const spacingClasses = useTheme((state) => state.getComponentStyle("cardContent", `spacing_${spacing}`));
  const disableSpacingClasses = useTheme((state) => state.getComponentStyle("cardContent", `${disable_spacing ? "disable_spacing" : "base"}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${spacingClasses}
        ${disableSpacingClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContent;
