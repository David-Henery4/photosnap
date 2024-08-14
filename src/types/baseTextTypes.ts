import { HTMLAttributes } from "react"

interface BaseTextProps extends HTMLAttributes<HTMLParagraphElement> {
  theme: "light" | "dark"
}

export default BaseTextProps