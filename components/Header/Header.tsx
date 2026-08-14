"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "#about" },
  { name: "RNA Travels", path: "/rna-travels" },
  { name: "RNA Condotel", path: "/rna-condotels" },
  { name: "RNA Production", path: "/rna-production" },
  { name: "RNA Services", path: "/rna-services" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-mont border-b border-(--cool-gray)/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-12 h-12 flex items-center">
          <Image
            src="/assets/icons/RNA-Emblem-black-cropped.svg"
            alt="Company Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path && link.path !== "#about";
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-semibold transition hover:text-(--brand-orange) ${
                  isActive ? "text-(--brand-orange)" : "text-(--dark-slate)"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Contact CTA */}
        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="bg-(--brand-orange) text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-(--brand-yellow) transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-(--deep-teal) p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t border-(--cool-gray)/20 flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.path && link.path !== "#about";
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-base font-semibold py-2 transition hover:text-(--brand-orange) border-b border-(--cool-gray)/10 ${
                  isActive ? "text-(--brand-orange)" : "text-(--dark-slate)"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-(--brand-orange) text-white text-center px-6 py-3 mt-2 rounded-full text-base font-semibold hover:bg-(--brand-yellow) transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
