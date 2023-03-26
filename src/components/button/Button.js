import React from "react";

const Button = ({
  onCLick,
  className = "",
  children,
  full = false,
  type = "button",
  bgColor = "primary",
  ...props
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onCLick}
      className={`py-3 px-6 rounded-lg capitalize ${bgClassName} ${
        full ? "w-full" : ""
      } mt-auto ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
