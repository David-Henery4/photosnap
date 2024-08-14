import { Logo, MenuIcon } from "../../public/assets/shared";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="col-start-2 col-end-12 w-full py-7 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
      <div className="hover:cursor-pointer">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;
