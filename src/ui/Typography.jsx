import React from "react";
import { useTheme } from "@store/themeStore";

const Typography = ({
  children,
  display = "flex",
  variant = "body1",
  color = "default",
  align = "left",
  weight = "medium",
  whitespace = "normal",

  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("typography", "base"));
  const displayClasses = useTheme((state) => state.getComponentStyle("typography", `display_${display}`));
  const variantClasses = useTheme((state) => state.getComponentStyle("typography", `variant_${variant}`));
  const colorClasses = useTheme((state) => state.getComponentStyle("typography", `color_${color}`));
  const alignClasses = useTheme((state) => state.getComponentStyle("typography", `align_${align}`));
  const weightClasses = useTheme((state) => state.getComponentStyle("typography", `weight_${weight}`));
  const whitespaceClasses = useTheme((state) => state.getComponentStyle("typography", `whitespace_${whitespace}`));

  return (
    <div
      className={`
        ${baseClasses}
        ${displayClasses}
        ${variantClasses}
        ${colorClasses}
        ${alignClasses}
        ${weightClasses}
        ${whitespaceClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Typography;
