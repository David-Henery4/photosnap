import { ThirdHeading } from "../reusable/text";

const MonthYearToggle = () => {
  return (
    <div className="flex items-center gap-8">
      <ThirdHeading theme="light">Monthly</ThirdHeading>
      <button className="relative w-16 h-8 bg-lightGrey rounded-2xl hover:cursor-pointer">
        <p className="sr-only">
          Pricing plan type toogle, currently selected as: {`${"monthly"}`}
        </p>
        <div className="absolute left-1 -translate-x-0 top-1/2 -translate-y-1/2 transition-all w-6 h-6 rounded-full bg-black"></div>
      </button>
      <ThirdHeading theme="light">Yearly</ThirdHeading>
    </div>
  );
};

export default MonthYearToggle;
