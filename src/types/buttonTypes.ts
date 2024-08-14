import { ButtonHTMLAttributes } from "react";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "primaryLight" | "primaryDark" | "secondaryLight" | "secondaryDark";
  buttonType: "primary" | "secondary";
}

export default ButtonTypes