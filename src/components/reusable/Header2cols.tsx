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

const header2ColsVariants = cva("", {
  variants: {
    headerType: {
      main: "bg-black",
      sub: "",
    },
    direction: {
      leftToRight: "",
      rightToLeft: "",
    },
  },
  defaultVariants: {
    direction: "leftToRight",
  },
});

export default Header2cols