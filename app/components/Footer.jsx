import { FooterLinks } from "../constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className=" h-auto w-full bg-white flex md:justify-between p-5 border-t-2 flex-col md:flex-row text-center items-center">
      <h1 className=" text-zinc-500 font-medium text-xl text-center items-center mb-5 md:mb-0">CarHub</h1>
      <div className=" flex md:flex-row flex-col text-center">
        {FooterLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className=" text-zinc-300 px-3 hover:text-blue-500 duration-200 font-medium"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};
