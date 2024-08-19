import { PropsWithChildren } from "react"

interface FeaturesGridTypes extends PropsWithChildren {
  isFullgrid?: boolean
}

const FeaturesGrid = ({ children, isFullgrid }: FeaturesGridTypes) => {
  return (
    <div
      className={`w-full max-w-[1110px] mx-auto flex justify-center gap-14 flex-col items-center ${
        isFullgrid
          ? "mdTab:grid mdTab:grid-cols-features2Cols mdTab:justify-items-center mdTab:items-end mdTab:gap-y-[72px] mdTab:gap-x-3 smLap:gap-x-6 smLap:grid-cols-features3Cols lgDesk:gap-x-[30px] lgDesk:gap-y-[104px]"
          : "smLap:flex-row smLap:items-end smLap:justify-between smLap:gap-6 lgDesk:gap-[30px]"
      }`}
    >
      {children}
    </div>
  );
};

export default FeaturesGrid