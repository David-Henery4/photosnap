import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import HeadingProps from "@/types/headingTypes";

const SecondaryHeading = ({className, theme, ...props}: HeadingProps) => {
  return (
    <h2
      className={cn(secondaryHeadingVariants({theme}), className)}
      {...props}
    />
  );
};

const secondaryHeadingVariants = cva("font-bold text-2xl leading-6", {
  variants: {
    theme: {
      light: "text-black",
      dark: "text-white",
    }
  },
  defaultVariants: {
      theme: "dark",
    },
})

export default SecondaryHeading;
