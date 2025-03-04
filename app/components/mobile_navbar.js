'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Mobile_Navbar({ Links, mobileMenuOpen, setMobileMenuOpen }) {
  const pathname = usePathname();

  return (
    <div className="relative w-full">
      {mobileMenuOpen && (
        <nav className="flex flex-col lg:hidden space-y-4 absolute top-full left-0 w-full bg-white py-4 z-10 px-6">
          {Links.map((link, index) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={index}
                href={link.path}
                className={`hover:text-[#8AF637] py-3 font-semibold font-gilroy  2xl:text-2xl lg:text-xl text-lg md:text-xl ${
                  isActive ? 'text-[#8AF637]' : 'text-[#ffffff]'
                }`}
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}

export default Mobile_Navbar;