"use client";

import Image from "next/image";
import { CarCatalogue } from "./components/CarCatalogue";

export default function Home() {
  return (
    <main className=" flex flex-col items-center text-center justify-center">
      <div className="flex flex-col md:flex-row text-start items-center w-auto h-auto">
        <div className="ml-5 sm:ml-10 md:ml-20 flex flex-col gap-10 text-start items-start">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-8xl">
            Find, book, rent a car-quick and super easy!
          </h1>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-3xl text-gray-400">
            Streamline your car rental experience with our effortless booking
            process.
          </h1>
          <button
            onClick={() => document.getElementById("Cars").scrollIntoView()}
            className="bg-blue-600 rounded-full px-7 py-2 text-lg font-medium text-white hover:scale-110 duration-200"
          >
            Explore Cars
          </button>
        </div>
        <div className="relative left-0 md:left-[20rem] bottom-0 md:bottom-[5rem]">
          <Image src="/hero-bg.png" alt="Hero" width={4000} height={4000} className=" relative object-cover bottom-[5rem] " />
          <Image
            src="/hero.png"
            alt="Hero"
            width={4000}
            height={100}
            className="absolute top-0 right-0 md:right-[20rem] z-2 object-cover"
          />
        </div>
      </div>
      <section id="Cars">
        <CarCatalogue />
      </section>
    </main>
  );
}