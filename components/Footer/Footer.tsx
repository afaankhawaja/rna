import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-(--deep-teal) font-mont text-(--neutral-white) mt-20">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}

          <div>

            <div className="relative w-28 h-28 mb-5 -ml-7">

              <Image
                src="/assets/icons/RNA All Logos-02.svg"
                alt="Company Logo"
                fill
                className="object-contain"
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
                <Link href="#" className="hover:text-(--neutral-white) transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-(--neutral-white) transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#" className="hover:text-(--neutral-white) transition">
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

              <p>+92 300 0000000</p>

              <p>info@company.com</p>

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

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-(--bright-teal) hover:bg-(--neutral-white) hover:text-(--deep-teal) transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-(--bright-teal) hover:bg-(--neutral-white) hover:text-(--deep-teal) transition flex items-center justify-center"
              >
                <FaYoutube />
              </a>

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