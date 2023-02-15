import React from "react";

type ButtonProps = {
  children: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  onClick,
  className = "",
}) => {
  const conditionalStyles =
    type === "primary"
      ? "text-white bg-indigo-400 hover:bg-indigo-500"
      : type === "secondary"
      ? "text-indigo-400 hover:text-indigo-500"
      : "";
  return (
    <button
      className={`rounded-md border-2 border-indigo-400 py-1 px-3 text-sm font-medium hover:border-indigo-500 ${conditionalStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
