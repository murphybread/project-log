import React from "react";
import { useTheme } from "@store/themeStore";

const ListItem = ({
  children,
  primary,
  secondary,

  selected = false,
  disabled = false,
  onClick,
  className = "",
  ...props
}) => {
  const baseClasses = useTheme((state) => state.getComponentStyle("listItem", "base"));
  const selectedClasses = useTheme((state) => state.getComponentStyle("listItem", selected ? "selected" : "unselected"));
  const disabledClasses = useTheme((state) => state.getComponentStyle("listItem", disabled ? "disabled" : "enabled"));
  const clickableClasses = onClick ? useTheme((state) => state.getComponentStyle("listItem", "clickable")) : "";

  const primaryTextClasses = useTheme((state) => state.getComponentStyle("listItem", "primaryText"));
  const secondaryTextClasses = useTheme((state) => state.getComponentStyle("listItem", "secondaryText"));

  return (
    <li
      className={`
        ${baseClasses}
        ${selectedClasses}
        ${disabledClasses}
        ${clickableClasses}
        ${className}
      `}
      onClick={disabled ? null : onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      {...props}
    >
      <div>
        {primary && <div className={primaryTextClasses}>{primary}</div>}
        {secondary && <div className={secondaryTextClasses}>{secondary}</div>}
        {children}
      </div>
    </li>
  );
};

export default ListItem;
