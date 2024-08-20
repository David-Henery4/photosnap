import { PropsWithChildren } from "react";

const PlanGrid = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 smLap:flex-row smLap:gap-[30px]">
      {children}
    </div>
  );
};

export default PlanGrid;
