import { ThirdHeading } from "../reusable/text";
import { Dispatch, SetStateAction } from "react";

interface ToggleProps {
  isYearly: boolean;
  setIsYearly: Dispatch<SetStateAction<boolean>>;
}

const MonthYearToggle = ({ isYearly, setIsYearly }: ToggleProps) => {
  return (
    <div className="flex items-center gap-8">
      <ThirdHeading theme="light">Monthly</ThirdHeading>
      <form
        className={`relative w-16 h-8 rounded-2xl transition-all hover:cursor-pointer ${
          isYearly ? "bg-black" : "bg-lightGrey"
        }`}
      >
        <label className="sr-only">
          Pricing plan type toogle, currently selected as:{" "}
          {`${isYearly ? "yearly" : "monthly"}`}
        </label>
        <input
          className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
          type="checkbox"
          name="payment-type"
          id="payment-type"
          value="isYearly"
          checked={isYearly}
          onChange={(e) => {
            setIsYearly(e.currentTarget.checked);
          }}
        />
        <div
          className={`absolute -translate-x-0 top-1/2 -translate-y-1/2 transition-all w-6 h-6 rounded-full pointer-events-none hover:cursor-pointer ${
            isYearly ? "left-9 bg-white" : "left-1 bg-black"
          }`}
        ></div>
      </form>
      <ThirdHeading theme="light">Yearly</ThirdHeading>
    </div>
  );
};

export default MonthYearToggle;
