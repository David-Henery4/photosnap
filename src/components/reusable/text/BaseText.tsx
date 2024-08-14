import { cva } from "class-variance-authority"
import BaseTextProps from "@/types/baseTextTypes"
import { cn } from "@/libs/utils"

const BaseText = ({theme, className, ...props}: BaseTextProps) => {
  return (
    <p className={cn(baseTextVariants({ theme }), className)} {...props} />
  );
}

const baseTextVariants = cva("text-base font-medium leading-6", {
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    },
  },
});

export default BaseText