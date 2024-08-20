import Button from "./buttons/Button";
import { Heading } from "./text";
import ArrowIcon from "../icons/ArrowIcon";

const CallToAction = () => {
  return (
    <section className="w-full col-start-1 col-end-13 grid grid-cols-overallMob bg-cta-bg-mob-lg bg-center bg-cover md2Tab:bg-cta-bg-Tab-lg md2Tab:grid-cols-overallTab desk:grid-cols-overallDesk desk:bg-cta-bg-Desk-lg">
      <div className="w-full max-w-[1110px] mx-auto col-start-2 col-end-12 py-16 flex flex-col justify-start items-start gap-6 smTab:flex-row smTab:justify-between smTab:items-center mdTab:py-[68px]">
        <Heading
          className="max-w-[310px] uppercase mdTab:max-w-[400px]"
          theme="dark"
        >
          We’re in beta. Get your invite today!
        </Heading>
        <Button buttonType="primary" theme="primaryDark" className="uppercase">
          get an invite
          <ArrowIcon stroke="#fff" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
