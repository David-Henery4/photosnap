import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingType?: string;
  theme: "light" | "dark";
}

export default HeadingProps