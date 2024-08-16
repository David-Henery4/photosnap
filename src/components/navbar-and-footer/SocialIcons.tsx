import socialData from "@/localData/socialData";
import Link from "next/link";

const SocialIcons = () => {
  return (
    <menu className="w-full flex justify-center items-center gap-3 mt-8">
      {socialData.map((social) => {
        return (
          <li key={social?.id} className="hover:scale-110">
            <Link href={social?.href}>
              <span className="sr-only">{social?.label}</span>
              <social.icon className="fill-white" />
            </Link>
          </li>
        );
      })}
    </menu>
  );
};

export default SocialIcons;
