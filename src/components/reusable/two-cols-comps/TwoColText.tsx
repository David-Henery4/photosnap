import { PropsWithChildren } from "react";

const TwoColText = ({children}: PropsWithChildren) => {
  return (
    <div className="px-6 py-[72px] smTab:py-[108px] mdTab:flex-[3] mdTab:py-0">
      {children}
    </div>
  );
};

export default TwoColText;
