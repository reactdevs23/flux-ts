import { logo } from "@/images";
import Image from "next/image";
import React from "react";

// Define type for the footer link
interface FooterLink {
  href: string;
  text: string;
}

const Footer = () => {
  // Array of links to be used in the footer for future scalability
  const footerLinks: FooterLink[] = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Service" }, // Add more links as needed
  ];

  return (
    <footer className="flex flex-col items-start xs:grid xs:grid-cols-[1fr,auto] lg:grid-cols-[auto,1fr,auto] xs:items-center lg:flex-row lg:items-center gap-4 lg:gap-6 container py-4">
      <Image
        src={logo.src}
        alt="Flux"
        width={160}
        height={50}
        className="w-40"
      />
      <p className="text-sm font-medium text-black sm:text-right lg:text-left order-3 order-2 xs:order-3 sm:order-2 col-span-1 xs:col-span-2 sm:col-span-1 text-left xs:text-center sm:text-left">
        © 2024 Flux AI Image, Inc. All rights reserved.
      </p>
      <div className="flex col-span-2 xs:col-span-1 sm:col-span-2 lg:col-span-1 justify-center lg:justify-start items-center gap-6 lg:ml-auto order-3 xs:order-2 sm:order-3">
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-black"
          >
            {link.text}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
