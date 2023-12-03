
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "../constants";

export const NavBar = () => {
  return (
    <nav className="absolute z-10 flex justify-between text-center items-center px-10 mt-2 w-full">
      <div className=" flex flex-row text-center items-center gap-1">
        <Image src={"/CarLogo.svg"} width={32} height={32} alt={"CarLogo"} />
        <h1 className=" text-2xl font-medium">CarHub</h1>
      </div>
      <div className="flex flex-row text-lg">
        {NavLinks.map((link, index) => (
          <Link href={link.path} key={index} className=" px-4 font-medium  hover:text-gray-400">
            {link.name}
          </Link>
        ))}
      </div>
      <button className=" text-blue-500 bg-white font-medium rounded-full px-7 py-2 hover:scale-105 duration-200">
        Sign up
      </button>
    </nav>
  );
};
