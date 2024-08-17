import { cva } from "class-variance-authority"
import { cn } from "@/libs/utils"
import Header2columnsProps from "@/types/header2columnsProps"

const Header2cols = ({headerType, className, direction, ...props}: Header2columnsProps) => {
  if (headerType === "sub"){
    return (
      <section
        className={cn(
          header2ColsVariants({ headerType, direction }),
          className
        )}
        {...props}
      />
    );
  }
    return (
      <header
        className={cn(
          header2ColsVariants({ headerType, direction }),
          className
        )}
        {...props}
      />
    );
}

const header2ColsVariants = cva("w-full col-start-1 col-end-13 mdTab:flex mdTab:items-center mdTab:justify-between", {
  variants: {
    headerType: {
      main: "bg-black",
      sub: "",
    },
    direction: {
      leftToRight: "mdTab:flex-row-reverse",
      rightToLeft: "mdTab:flex-row",
    },
  },
  defaultVariants: {
    direction: "leftToRight",
    headerType: "sub"
  },
});

export default Header2cols