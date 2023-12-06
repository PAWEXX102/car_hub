"use client"

import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const [isscrolled, setIsscrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsscrolled(true);
      } else {
        setIsscrolled(false);
      }
    });
  }, []);

  return (
    <nav className={`fixed z-10 flex justify-between text-center items-center px-10 py-2 w-full ${isscrolled?'bg-white drop-shadow-lg ':''} duration-200`}>
      <div className="hidden flex-row text-center items-center gap-1 lg:flex">
        <Image src={"/CarLogo.svg"} width={32} height={32} alt={"CarLogo"} />
        <h1 className="text-2xl font-medium">CarHub</h1>
      </div>
      <div className="hidden flex-row text-lg lg:flex">
        {NavLinks.map((link, index) => (
          <Link href={link.path} key={index} className="px-4 font-medium hover:text-gray-400">
            {link.name}
          </Link>
        ))}
      </div>
      <button className={`hidden lg:block font-medium rounded-full px-7 py-2 hover:scale-105 ${isscrolled?'text-white bg-blue-500':'text-blue-500 bg-white'} duration-200`}>
        Sign up
      </button>
      <button className="block lg:hidden ml-auto">
        <Image src={"/menu-bar.svg"} width={32} height={32} alt={"User"} />
      </button>
    </nav>
  );
}