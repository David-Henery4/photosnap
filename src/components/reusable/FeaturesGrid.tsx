import { PropsWithChildren } from "react"

const FeaturesGrid = ({children}:PropsWithChildren) => {
  return (
    <div className="flex flex-col justify-center items-center gap-14">{children}</div>
  )
}

export default FeaturesGrid