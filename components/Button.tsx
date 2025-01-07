import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
  onClick?: () => void;
};
const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={`flexCenter crsr-pointer gap-3 rounded-full border ${variant}`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}{" "}
      <label>{title}</label>{" "}
    </button>
  );
};

export default Button;
