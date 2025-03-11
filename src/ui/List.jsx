import React from "react";
import { useTheme } from "@store/themeStore";

const List = ({ children, variant = "default", spacing = "md", dividers = false, padding = "md", className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("list", "base"));
  const variantClasses = useTheme((state) => state.getComponentStyle("list", `variant_${variant}`));
  const spacingClasses = useTheme((state) => state.getComponentStyle("list", `spacing_${spacing}`));
  const paddingClasses = useTheme((state) => state.getComponentStyle("list", `padding_${padding}`));
  const dividerClasses = useTheme((state) => state.getComponentStyle("list", dividers ? "dividers" : "noDividers"));

  return (
    <ul
      className={`
        ${baseClasses}
        ${variantClasses}
        ${spacingClasses}
        ${paddingClasses}
        ${dividerClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </ul>
  );
};

export default List;
