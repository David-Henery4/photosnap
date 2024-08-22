import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import ButtonTypes from "@/types/buttonTypes";

const Button = ({ theme, buttonType, className, ...props }: ButtonTypes) => {
  return (
    <button className={cn(buttonVariants({ theme }), className)} {...props} />
  );
};

const buttonVariants = cva("font-bold text-xs tracking-[2px]", {
  variants: {
    theme: {
      primaryLight:
        "text-black hover:underline hover:decoration-black active:no-underline",
      primaryDark:
        "text-white hover:underline hover:decoration-white active:no-underline",
      secondaryLight:
        "text-white bg-black hover:bg-lightGrey hover:text-black active:text-white active:bg-black",
      secondaryDark: "text-black bg-white hover:bg-lightGrey active:bg-white",
    },
    buttonType: {
      primary: "flex justify-start items-center gap-4",
      secondary: "px-6 py-3",
    },
  },
  defaultVariants: {
    theme: "primaryDark",
    buttonType: "primary",
  },
});

export default Button;
