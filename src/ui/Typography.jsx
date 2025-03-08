import React from "react";
import { useTheme } from "@store/themeStore";

const Typography = ({
  children,
  variant = "body1",
  color = "default",
  align = "left",
  weight = "medium",
  whitespace = "normal",

  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("typography", "base"));
  const variantClasses = useTheme((state) => state.getComponentStyle("typography", `variant_${variant}`));
  const colorClasses = useTheme((state) => state.getComponentStyle("typography", `color_${color}`));
  const alignClasses = useTheme((state) => state.getComponentStyle("typography", `align_${align}`));
  const weightClasses = useTheme((state) => state.getComponentStyle("typography", `weight_${weight}`));
  const whitespaceClasses = useTheme((state) => state.getComponentStyle("typography", `whitespace_${whitespace}`));

  return (
    <div
      className={`
        ${baseClasses}
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
