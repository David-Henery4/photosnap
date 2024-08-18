import { PropsWithChildren } from "react"

const FeaturesGrid = ({children}:PropsWithChildren) => {
  return (
    <div className="w-full max-w-[1110px] mx-auto flex flex-col justify-center items-center gap-14 smLap:flex-row smLap:items-end smLap:justify-between smLap:gap-[30px]">
      {children}
    </div>
  );
}

export default FeaturesGrid