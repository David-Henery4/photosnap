import { PropsWithChildren } from "react";
import FlairBar from "../flair-bar/FlairBar";

interface TwoColTextProps extends PropsWithChildren {
  isHeader?: boolean;
}

const TwoColText = ({ children, isHeader }: TwoColTextProps) => {
  return (
    <div className="relative px-6 py-[72px] xSmTab:py-[108px] mdTab:flex-[3] mdTab:py-0 md2Tab:px-10 mdDesk:flex-[2.55]">
      {isHeader && (
        <div className="hidden mdTab:block">
          <FlairBar />
        </div>
      )}
      <div className="relative max-w-[387px] mx-auto">
        {isHeader && (
          <div className="mdTab:hidden">
            {" "}
            <FlairBar />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default TwoColText;
