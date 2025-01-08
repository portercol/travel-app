"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdMenu, MdClose } from "react-icons/md";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="Application logo"
          width={75}
          height={25}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-slate-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger Menu Icon (Mobile) */}
      <button
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="text-2xl text-slate-800 lg:hidden"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 px-6 pt-16 transition-transform duration-300 ease-in-out md:hidden translate-x-0">
          {/* Close Menu Icon */}
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="absolute top-5 right-5 p-2 text-3xl text-slate-800"
          >
            {/* Mobile Menu Icon */}
            <MdClose />
          </button>

          {/* Mobile Menu Links */}
          <ul className="flex flex-col pt-4 items-end gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-slate-800 flexCenter cursor-pointer transition-all hover:font-bold"
                onClick={toggleMenu} // Close menu when a link is clicked
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
