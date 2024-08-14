import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils";
import HeadingProps from "@/types/headingTypes";

const FourthHeading = ({ theme, className, ...props }: HeadingProps) => {
  return (
    <h4 className={cn(fourthHeadingVariants({ theme }), className)} {...props} />
  );
};

const fourthHeadingVariants = cva("font-bold text-xs leading-4 tracking-[2px]", {
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    },
  },
});

export default FourthHeading