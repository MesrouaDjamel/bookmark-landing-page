"use client";
import Link from "next/link";
import Separator from "./Separator";
import { usePathname } from "next/navigation";
type TNavLinks = {
  separatorIsVisible?: boolean;
  className?: string;
  ulClassName?: string;
};
const NavLinks = ({
  separatorIsVisible,
  className,
  ulClassName,
}: TNavLinks) => {
  const pathname = usePathname();

  const navItem = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav>
      <ul className={`${ulClassName}`}>
        {navItem.map((item) => (
          <Link href={item.href} key={item.label}>
            <li className={`${className} group relative ${pathname === item.href && "text-softRed font-semibold"}`}>
              {item.label}
              <div className="absolute -bottom-[8px] left-1/2 h-[2px] bg-white w-8 transform transition-transform ease-in-out duration-300 -translate-x-1/2 scale-x-0 group-hover:bg-softRed group-hover:scale-x-150"></div>
            </li>
            <Separator isVisible={separatorIsVisible} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
