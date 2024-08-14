import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import HeadingProps from "@/types/headingTypes";

const ThirdHeading = ({ theme, className, ...props }: HeadingProps) => {
  return (
    <h3 className={cn(thirdHeadingVariants({ theme }), className)} {...props} />
  );
};

const thirdHeadingVariants = cva("text-lg leading-6 font-bold", {
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

export default ThirdHeading;
