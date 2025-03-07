import React from "react";
import { useTheme } from "@store/themeStore";

const CardContent = ({ children, spacing = "md", disableSpacing = false, className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("cardContent")["base"]);
  const spacingClasses = useTheme((state) => state.getComponentStyle("cardContent")[spacing]);
  const disableSpacingClasses = disableSpacing ? "px-0 py-0" : "";

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
