import { cva } from "class-variance-authority"
import BaseTextProps from "@/types/baseTextTypes"
import { cn } from "@/libs/utils"

const BaseText = ({theme, className, ...props}: BaseTextProps) => {
  return (
    <p className={cn(baseTextVariants({ theme }), className)} {...props} />
  );
}

const baseTextVariants = cva("text-base font-light leading-6 opacity-60", {
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    },
  },
  defaultVariants: {
    theme: "dark",
  },
});

export default BaseText