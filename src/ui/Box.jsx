import React from "react";
import { useTheme } from "@store/themeStore";

const Box = ({
  children,
  display = "flex",
  padding = "md",
  margin = "none",
  width = "full",
  height = "fit",
  variant = "outlined",
  color = "default",
  direction = "row",
  gap = "sm",
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
  const directionClasses = useTheme((state) => state.getComponentStyle("box", `direction_${direction}`));
  const gapClasses = useTheme((state) => state.getComponentStyle("box", `gap_${gap}`));

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
        ${directionClasses}
        ${gapClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Box;
