import React from "react";
import { useTheme } from "@store/themeStore";

const Box = ({
  children,
  display = "block",
  padding = "md",
  margin = "none",
  width = "auto",
  height = "fit",
  variant = "outlined",
  color = "default",
  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("box", "base"));
  const displayClasses = useTheme((state) => state.getComponentStyle("box", `display_${display}`));
  const paddingClasses = useTheme((state) => state.getComponentStyle("box", `padding_${padding}`));
  const marginClasses = useTheme((state) => state.getComponentStyle("box", `margin_${margin}`));
  const widthClasses = useTheme((state) => state.getComponentStyle("box", `width_${width}`));
  const heightClasses = useTheme((state) => state.getComponentStyle("box", `height_${height}`));
  const variantClasses = useTheme((state) => state.getComponentStyle("box", `variant_${variant}`));
  const colorClasses = useTheme((state) => state.getComponentStyle("box", `color_${color}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${displayClasses}
        ${paddingClasses}
        ${marginClasses}
        ${widthClasses}
        ${heightClasses}
        ${variantClasses}
        ${colorClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
