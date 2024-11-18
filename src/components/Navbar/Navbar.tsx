"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { logo } from "@/images";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AppContext } from "@/app/Provider";

interface NavItem {
  navItem: string;
  to: string;
}

const Navbar: React.FC = () => {
  const { showGenerateButton } = useContext(AppContext) || {
    showGenerateButton: false,
  };

  const navItems: NavItem[] = [
    { navItem: "Generate New", to: "generate-new" },
    { navItem: "Image to Image", to: "image-to-image" },
    { navItem: "Pricing", to: "pricing" },
    { navItem: "My Images", to: "my-images" },
  ];

  const [sidebar, setSidebar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setSidebar(false); // Close the sidebar on link click
  };

  return (
    <div
      className={`fixed top-0 w-full z-20 ${
        isScrolled || sidebar ? "bg-primary shadow-sm" : ""
      }`}
    >
      <header className="grid grid-cols-[auto,1fr] h-[80px] lg:h-[90px] items-center justify-start gap-12 xl:gap-24 py-4 container">
        <Link href="/" onClick={() => setSidebar(false)}>
          <Image
            src={logo.src}
            alt="Flux"
            width={160}
            height={50}
            className="w-40"
          />
        </Link>

        <div
          className={`navbar ${
            sidebar
              ? "transform translate-x-0"
              : "lg:translate-x-0 translate-x-full"
          }`}
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.to}
              className={`text-black text-base font-medium cursor-pointer ${
                activeLink === item.to ? "text-green" : ""
              }`}
              onClick={() => handleLinkClick(item.to)}
            >
              {item.navItem}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="font-semibold text-base lg:ml-auto block hover:text-green transition duration-300"
          >
            Sign in
          </Link>
          {showGenerateButton && (
            <button
              className="hover:opacity-70 transition duration-500   px-6 py-2 bg-black border-green border-solid border-2 rounded-lg text-white text-base font-bold"
              onClick={() => {}}
            >
              Generate Now
            </button>
          )}
        </div>

        <div
          className="flex flex-col ml-auto justify-center items-center cursor-pointer lg:hidden"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {sidebar ? (
            <IoMdClose className="text-black text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-black text-xl" />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
