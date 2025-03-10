import React from "react";
import { useTheme } from "@store/themeStore";

const CardHeader = ({ children, variant = "default", title, subtitle, className = "", ...props }) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("cardHeader", "base"));
  const variantClasses = useTheme((state) => state.getComponentStyle("cardHeader", `variant_${variant}`));

  const titleClasses = useTheme((state) => state.getComponentStyle("cardHeader", "title"));
  const subtitleClasses = useTheme((state) => state.getComponentStyle("cardHeader", "subtitle"));

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses}
        ${className}
      `}
      {...props}
    >
      <div className="block items-center w-full">
        <div className="flex-grow">
          {title && <h5 className={titleClasses}>{title}</h5>}

          {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
