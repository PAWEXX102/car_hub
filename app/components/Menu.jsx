import React from "react";
import Image from "next/image";
import { NavLinks } from "../constants";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const menuVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

export const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = React.useState(isMenuOpen);

  React.useEffect(() => {
    setIsOpen(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.5 }}
          className="bg-white w-full h-full fixed  z-10 items-center text-center justify-start flex flex-col select-none"
        >
          <div className="flex flex-row gap-3 items-center text-center justify-between w-full py-1 px-3">
            <button
              onClick={() => setTimeout(() => window.location.reload(), 500)}
            >
              <Image src={"/CarLogo.svg"} alt="Logo" width={32} height={32} />
            </button>
            <button
              onClick={() => {
                document.body.style.overflow = "";
                setIsMenuOpen(false);
              }}
            >
              <Image src={"/xmark.svg"} alt="Close" width={32} height={32} />
            </button>
          </div>
          <div className="mt-10">
            {NavLinks.map((link, Index) => (
              <div
                key={Index}
                className="flex flex-row gap-3 items-center text-center justify-center w-full p-2"
              >
                <Link
                  href={link.path}
                  className="text-2xl font-medium text-gray-400 hover:text-blue-500"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
          <button
            className={` mt-7 bg-blue-500 text-white font-medium rounded-full px-7 py-2 hover:scale-105 duration-200`}
          >
            Sign up
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
