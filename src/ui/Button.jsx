import React from "react";

const Button = ({
  children,
  variant = "primary", // primary, secondary, outline
  fontSize = "md", // sm, md, lg
  className = "",
  display = "inline-block",

  ...props // 나머지 모든 HTML button props는 그대로 전달
}) => {
  const buttonText = children || "Button";
  // 기본 스타일 클래스 (Tailwind 사용)
  const baseClasses = "font-medium rounded transition-colors focus:outline-none";

  // variant에 따른 스타일
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const sizingClasses = "w-max h-max";

  // size에 따른 스타일
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${display}
        ${sizingClasses}
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[fontSize]}
        ${className}
      `}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
