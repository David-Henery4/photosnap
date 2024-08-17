import { Logo, MenuIcon } from "../../public/assets/shared";
import { NavList } from "./navbar-and-footer";
import Link from "next/link";
import Button from "./reusable/buttons/Button";
import navData from "@/localData/navData";

const Navbar = () => {
  const footNavData = navData.slice(1)
  return (
    <nav className="col-start-2 col-end-12 w-full py-7 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <NavList navVariant="navbar" className="hidden gap-9 tab:flex">
        {footNavData.map((navItem) => {
          return (
            <li key={navItem.id}>
              <Link href={navItem.href}>{navItem.label}</Link>
            </li>
          );
        })}
      </NavList>
      <Button
        buttonType="secondary"
        theme="secondaryLight"
        className="hidden uppercase px-6 py-3 tab:block"
      >
        Get an invite
      </Button>
      <div className="hover:cursor-pointer tab:hidden">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;
