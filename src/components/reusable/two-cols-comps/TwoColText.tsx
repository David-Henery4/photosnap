import { PropsWithChildren } from "react";

const TwoColText = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-6 py-[72px] smTab:py-[108px] mdTab:flex-[3] mdTab:py-0 md2Tab:px-10 mdDesk:flex-[2.55]">
      <div className="max-w-[387px] mx-auto">{children}</div>
    </div>
  );
};

export default TwoColText;
