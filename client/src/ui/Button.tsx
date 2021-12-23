import * as React from "react";

export interface ButtonProps {
  label: string;
  rounded?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  onClick: () => void;
}

const Button = ({
  label,
  rounded = false,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        rounded ? "rounded-full" : "rounded-md"
      } bg-primary font-primary text-white text-lg py-3 px-6 outline-none font-medium ${
        variant == "secondary" && "bg-grey-50 text-grey-primary"
      }`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
