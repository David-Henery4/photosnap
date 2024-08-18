import { cva} from "class-variance-authority";
import { cn } from "@/libs/utils";
import HeadingProps from "@/types/headingTypes";

const Heading = ({ className, headingType, theme, ...props }: HeadingProps) => {
  if (headingType === "h2Lg")
    return (
      <h2 className={cn(headingVariants({ theme }), className)} {...props} />
    );
  return (
    <h1 className={cn(headingVariants({ theme }), className)} {...props} />
  );
};

const headingVariants = cva(
  "text-[32px] leading-[48px] tracking-[4.17px] font-bold mdTab:text-[40px]", // 40px fontSize tba at larger screen width
  {
    variants: {
      theme: {
        light: "text-black",
        dark: "text-white",
      },
    },
    defaultVariants: {
      theme: "dark",
    },
  }
);

export default Heading;
