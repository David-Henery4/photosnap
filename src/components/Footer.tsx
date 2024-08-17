import { Logo } from "../../public/assets/shared";
import { SocialIcons, NavList } from "./navbar-and-footer";
import Button from "./reusable/buttons/Button";
import ArrowIcon from "./icons/ArrowIcon";
import { BaseText } from "./reusable/text";
import Link from "next/link";
import navData from "@/localData/navData";
import LogoIcon from "./icons/LogoIcon";

const Footer = () => {
  return (
    <footer className="w-full py-14 col-start-1 col-end-13 grid grid-cols-overallMob bg-black md2Tab:grid-cols-overallTab">
      <div className="w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-[120px] mdTab:flex-row mdTab:justify-between mdTab:items-start mdTab:gap-0">
        <div className="grid ">
          <LogoIcon fill="#fff"/>
          <SocialIcons />
          <NavList navVariant="footer">
            {navData.map((navItem) => {
              return (
                <li key={navItem.id} className="hover:text-topBlue">
                  <Link href={navItem.href}>{navItem?.label}</Link>
                </li>
              );
            })}
          </NavList>
        </div>
        <div className="w-full flex flex-col justify-center items-center text-center gap-8 mdTab:h-full mdTab:justify-between mdTab:items-end">
          <Button buttonType="primary" theme="primaryDark">
            GET AN INVITE <ArrowIcon stroke="#fff" />
          </Button>
          <BaseText theme="dark">Copyright 2019. All Rights Reserved</BaseText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
