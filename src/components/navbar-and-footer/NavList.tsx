import{ cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import NavlistTypes from "@/types/navListTypes";

const NavList = ({navVariant, className, ...props}: NavlistTypes) => {
  return (
    <menu
      className={cn(navListVariants({ navVariant }), className)}
      {...props}
    />
  );
}

const navListVariants = cva(
  "flex justify-center items-center text-xs font-bold uppercase tracking-[2px]",
  {
    variants: {
      navVariant: {
        navbar: "text-black gap-9",
        sidebar: "text-black flex-col gap-5",
        footer: "text-white flex-col gap-5",
      },
    },
    defaultVariants: {
      navVariant: "navbar",
    },
  }
);

export default NavList