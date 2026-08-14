"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  // Default contact info
  let email = "contact@rna-ksa.com";
  let phone = "+966 50 000 0000"; // Generic number

  // Update contact info based on the current page
  if (pathname === "/rna-travels") {
    email = "travels@rna-ksa.com";
    phone = "+966 50 111 1111"; // Example specific number
  } else if (pathname === "/rna-services") {
    email = "services@rna-ksa.com";
    phone = "+966 50 222 2222";
  } else if (pathname === "/rna-condotels") {
    email = "condotel@rna-ksa.com";
    phone = "+966 50 333 3333";
  } else if (pathname === "/rna-production") {
    email = "production@rna-ksa.com";
    phone = "+966 50 444 4444";
  }

  return (
    <footer id="contact" className="bg-(--deep-teal) font-mont text-(--neutral-white) mt-20">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="relative w-28 h-26 mb-5 -ml-4">

              <Image
                src="/assets/icons/RNA-Emblem-white-cropped.svg"
                alt="Company Logo"
                fill
                className="object-contain pt-1.5"
              />

            </div>

            <p className="text-sm leading-7 text-(--accent-sky) font-mont">
            RNA Traders — Connecting Services, Creating Values.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-white text-lg font-mont font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 font-mont text-(--accent-sky)">

              <li>
                <Link href="/" className="hover:text-(--neutral-white) transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className="hover:text-(--neutral-white) transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/rna-travels" className="hover:text-(--neutral-white) transition">
                  RNA Travels
                </Link>
              </li>

              <li>
                <Link href="/rna-condotels" className="hover:text-(--neutral-white) transition">
                  RNA Condotel
                </Link>
              </li>

              <li>
                <Link href="/rna-production" className="hover:text-(--neutral-white) transition">
                  RNA Production
                </Link>
              </li>

              <li>
                <Link href="/rna-services" className="hover:text-(--neutral-white) transition">
                  RNA Services
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-(--neutral-white) transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-(--accent-sky)">

              <p>8376 Hail St. Al Baghdadia, Jeddah, Saudi Arabia </p>

              <p>{phone}</p>

              <p>{email}</p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-white text-lg font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-(--bright-teal) hover:bg-(--neutral-white) hover:text-(--deep-teal) transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-(--bright-teal) hover:bg-(--neutral-white) hover:text-(--deep-teal) transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              {pathname === "/rna-condotels" && (
                <a
                  href="#"
                  className="w-11 h-11 rounded-full bg-(--bright-teal) hover:bg-(--neutral-white) hover:text-(--deep-teal) transition flex items-center justify-center"
                >
                  <FaYoutube />
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-(--cool-gray)">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-(--accent-sky)">
            © {new Date().getFullYear()} Company. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-(--accent-sky)">

            <Link href="#" className="hover:text-(--neutral-white) transition">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-(--neutral-white) transition">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;