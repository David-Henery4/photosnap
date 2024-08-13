import { PropsWithChildren } from "react"

const BaseText = ({children}: PropsWithChildren) => {
  return (
    <p>{children}</p>
  )
}

export default BaseText