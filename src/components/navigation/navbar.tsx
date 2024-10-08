import React from 'react';
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className={"w-full h-20 bg-emerald-800 sticky top-0"}>
        <div className="container mx-auto px-4 h-full">
          <button type="button" className="inline-flex items-center md:hidden absolute top-5 right-5"
            onClick={toggle}>
            {/* Menu icon */}
            <svg xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24">
                <path fill="#fff"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
            </svg>
          </button>
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
                <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/hooks">
                  <p>Hooks</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;