"use client";
import React, { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Mobile_Navbar from "./mobile_navbar";
import Navbar from "./navbar";

function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define Links array inside Header
  const Links = useMemo(
    () => [
      { path: "/", name: "Home" },
      { path: "/about", name: "About Us" },
      { path: "/services", name: "Services" },
      { path: "/team", name: "Our Team" },
      { path: "/contact", name: "Contact" },
    ],
    []
  );

  // Memoized page titles based on routes
  const pageTitles = useMemo(
    () => ({
      "/": "Home - Calfin",
      "/about": "About Us - Calfin",
      "/services": "Services - Calfin",
      "/team": "Our Team - Calfin",
      "/contact": "Contact - Calfin",
    }),
    []
  );

  useEffect(() => {
    // Update document title based on current route
    const title = pageTitles[pathname] || "Calfin";
    document.title = title;
  }, [pathname, pageTitles]);

  return (
    <>
      {/* Header Component */}
      <div className="w-full justify-between bg-[#171616] lg:justify-start  flex">
        <div className="flex lg:space-x-10 py-4  px-4 md:px-12 justify-between  lg:px-16 sm:mobile-clip-none mobile-clip w-full">
          <div className="flex items-center">
            <Image
              src="/embiotix_logo.png"
              alt="embiotix_logo"
              className=" object-contain h-24 w-full "
              width={150}
              height={150}
            />
          </div>
          <div className="flex items-center ">
            <div className="lg:flex hidden items-center">
              {/* Pass Links to Navbar */}
              <Navbar Links={Links} />
            </div>
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-2xl text-[#8AF637] focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {/* Pass Links and menu state to Mobile Navbar */}
      
      </div>
      <Mobile_Navbar 
        Links={Links}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
    </>
  );
}

export default Header;
