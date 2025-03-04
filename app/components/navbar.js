'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar({ Links }) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex space-x-12 items-center">
      {Links.map((link, index) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={index}
            href={link.path}
            className={`hover:text-[#8AF637] font-normal md:text-lg text-justify 2xl:text-xl lg:text-lg text-base ${
              isActive ? "text-[#8AF637]" : "text-[#ffffff] font-gilroy"
            }`}
          >
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;