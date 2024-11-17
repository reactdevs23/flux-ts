"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { logo } from "@/images";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// Define types for the navigation items and social media links
interface NavItem {
  navItem: string;
  to: string;
}

const Navbar = () => {
  // State to manage the sidebar visibility, scroll state, and active link
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  // Navigation items and social media links
  const navItems: NavItem[] = [
    { navItem: "Generate New", to: "generate-new" },
    { navItem: "Image to Image", to: "image-to-image" },
    { navItem: "Pricing", to: "pricing" },
    { navItem: "My Images", to: "my-images" },
  ];

  // Handle scroll event to change navbar appearance
  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Set up event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle navigation link click
  const handleLinkClick = (to: string) => {
    setActiveLink(to);
    setSidebar(false); // Close the sidebar on link click
  };

  return (
    <div
      className={`fixed top-0 w-full z-20 ${
        isScrolled
          ? "bg-primary shadow-sm"
          : sidebar
          ? "shadow-sm bg-primary"
          : ""
      }`}
    >
      <header className="grid grid-cols-[auto,1fr] h-[80px] lg:h-[90px] items-center justify-start gap-24 py-4 container">
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
            className="font-semibold text-base lg:ml-auto block"
          >
            Sign in
          </Link>
        </div>

        <div
          className={`flex flex-col ml-auto justify-center items-center cursor-pointer lg:hidden`}
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
