import {HTMLAttributes} from "react"

interface Header2columnsProps extends HTMLAttributes<HTMLElement> {
  headerType: "main" | "sub";
  direction: "leftToRight" | "rightToLeft";
}

export default Header2columnsProps