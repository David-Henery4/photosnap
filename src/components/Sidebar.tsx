import LogoIcon from "./icons/LogoIcon";
import { CrossIcon } from "../../public/assets/shared";
import navData from "@/localData/navData";
import { NavList } from "./navbar-and-footer";
import Link from "next/link";
import { BaseText } from "./reusable/text";
import { Dispatch, SetStateAction } from "react";
import Button from "./reusable/buttons/Button";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const footNavData = navData.slice(1);
  //
  const handleCloseSidebar = () => setIsSidebarOpen(false);
  //
  return (
    <>
      <div
        className={`fixed z-30 top-0 left-0 w-full h-screen bg-black/50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={handleCloseSidebar}
      ></div>
      <aside
        className={`w-full px-6 py-8 fixed z-40 top-0 transition-all bg-white ${
          isSidebarOpen ? "-left-0" : "-left-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" onClick={handleCloseSidebar}>
            <span className="sr-only">Logo link leading to the home page</span>
            <LogoIcon fill="#000" />
          </Link>
          <CrossIcon
            className="hover:cursor-pointer"
            onClick={handleCloseSidebar}
          />
        </div>
        <nav className="max-w-96 mx-auto pt-8 pb-5 border-b border-b-black/25">
          <NavList navVariant="sidebar">
            {footNavData.map((navItem) => {
              return (
                <li key={navItem.id}>
                  <Link
                    href={navItem.href}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <BaseText
                      className="opacity-100 hover:opacity-60"
                      theme="light"
                    >
                      {navItem.label}
                    </BaseText>
                  </Link>
                </li>
              );
            })}
          </NavList>
        </nav>
        <Button
          className="w-full max-w-96 mx-auto uppercase px-6 py-4 mt-5 justify-center"
          buttonType="secondary"
          theme="secondaryLight"
        >
          Get an invite
        </Button>
      </aside>
    </>
  );
};

export default Sidebar;
