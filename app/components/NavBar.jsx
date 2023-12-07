"use client";

import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";
import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavBar = () => {
  const [isscrolled, setIsscrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();


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
    <>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <nav
        className={`fixed z-10 flex justify-between text-center items-center lg:px-10 px-3 py-2 w-full ${
          isscrolled ? "bg-white drop-shadow-lg " : ""
        } duration-200`}
      >
        <div className=" flex flex-row text-center items-center gap-1">
          <Link href="/">
            <Image
              src={"/CarLogo.svg"}
              width={32}
              height={32}
              alt={"CarLogo"}
              className={`${isMenuOpen ? "hidden" : "block"}`}
            />
          </Link>
          <h1 className="text-2xl font-medium hidden lg:block">CarHub</h1>
        </div>
        <div className="hidden flex-row text-lg lg:flex">
          {NavLinks.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={clsx(
                "flex items-center p-3 text-lg hover:text-blue-600 duration-200 font-medium",
                {
                  " text-blue-600": pathname === link.path,
                }
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button
          className={`hidden lg:block font-medium rounded-full px-7 py-2 hover:scale-105 ${
            isscrolled ? "text-white bg-blue-500" : "text-blue-500 bg-white"
          } duration-200`}
        >
          Sign up
        </button>
        <button
          className="block lg:hidden ml-auto"
          onClick={() => {
            setIsMenuOpen(true);
            document.body.style.overflow = "hidden";
          }}
        >
          <Image
            src={"/menu-bar.svg"}
            width={32}
            height={32}
            alt={"User"}
            className={`${isMenuOpen ? "hidden" : "block"}`}
          />
        </button>
      </nav>
    </>
  );
};
