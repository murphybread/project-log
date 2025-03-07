import React from "react";
import { useTheme } from "@store/themeStore";

const Divider = ({
  variant = "horizontal",
  thickness = "thin",
  spacing = "sm",
  className = "",

  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("divider")["base"]);
  const variantClasses = useTheme((state) => state.getComponentStyle("divider")[variant]);
  const thicknessClasses = useTheme((state) => state.getComponentStyle("divider")[thickness]);
  const spacingClasses = useTheme((state) => state.getComponentStyle("divider")[spacing]);

  return (
    <hr
      className={`
        ${baseClasses}
        ${variantClasses}
        ${thicknessClasses}
        ${spacingClasses}
        ${className}
      `}
      {...props}
    ></hr>
  );
};

export default Divider;
