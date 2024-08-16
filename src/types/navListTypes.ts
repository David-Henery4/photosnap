import { HTMLAttributes } from "react";

interface NavlistTypes extends HTMLAttributes<HTMLMenuElement> {
  navVariant: "navbar"| "sidebar"| "footer"
}

export default NavlistTypes