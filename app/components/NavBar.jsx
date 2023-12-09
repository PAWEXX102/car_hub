"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = clsx(
    "fixed z-10 flex justify-between text-center items-center lg:px-10 px-3 py-2 w-full duration-200",
    { "bg-white drop-shadow-lg": isScrolled }
  );

  const linkClass = (path) =>
    clsx(
      "flex items-center p-3 text-lg hover:text-blue-600 duration-200 font-medium",
      { "text-blue-600": pathname === path }
    );

  const buttonClass = clsx(
    "hidden lg:block font-medium rounded-full px-7 py-2 hover:scale-105 duration-200",
    {
      "text-white bg-blue-500": pathname !== "/" || isScrolled,
      "text-blue-500 bg-white": pathname === "/" && !isScrolled,
    }
  );

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav className={navClass}>
        <div className="flex flex-row text-center items-center gap-1">
          <Link href="/">
            <Image
              src={"/CarLogo.svg"}
              width={32}
              height={32}
              alt={"CarLogo"}
            />
          </Link>
          <h1 className="text-2xl font-medium hidden lg:block">CarHub</h1>
        </div>
        <div className="hidden flex-row text-lg lg:flex">
          {NavLinks.map((link, index) => (
            <Link href={link.path} key={index} className={linkClass(link.path)}>
              {link.name}
            </Link>
          ))}
        </div>
        <button className={buttonClass}>Sign up</button>
        <button className="block lg:hidden ml-auto" onClick={handleMenuOpen}>
          <Image
            src={"/menu-bar.svg"}
            width={32}
            height={32}
            alt={"User"}
            className={isMenuOpen ? "opacity-0" : "opacity-100"}
          />
        </button>
        <ProgressBar />
      </nav>
    </div>
  );
};
