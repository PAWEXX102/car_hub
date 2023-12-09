"use client";

import Image from "next/image";
import { CarCatalogue } from "./components/CarCatalogue";

const scrollToCars = () => document.getElementById("Cars").scrollIntoView();

export default function Home() {
  return (
    <main className=" flex flex-col items-center text-center justify-center">
      <div className="flex flex-col md:flex-row text-start items-center w-auto h-auto my-10">
        <div className="lg:ml-5 flex flex-col gap-10 text-center items-center w-full lg:text-start lg:items-start">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl w-[20rem] lg:w-auto font-semibold lg:font-medium">
            Find, book, rent a car-quick and super easy!
          </h1>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-3xl text-gray-400 w-[20rem] lg:w-auto">
            Streamline your car rental experience with our effortless booking
            process.
          </h1>
          <button
            onClick={scrollToCars}
            className="bg-blue-600 rounded-full px-7 py-2 text-lg font-medium text-white hover:scale-110 duration-200"
          >
            Explore Cars
          </button>
        </div>
        <div className=" relative left-0 md:left-[30rem] bottom-0 md:bottom-[5rem] hidden lg:block">
          <Image src="/hero-bg.png" alt="Hero" width={4000} height={4000} className=" relative object-cover bottom-[6rem] right-20 " />
          <Image
            src="/hero.png"
            alt="Hero"
            width={2000}
            height={100}
            className="absolute top-0 right-0 md:right-[20rem] z-2 object-fill"
          />
        </div>
      </div>
      <section id="Cars">
        <CarCatalogue />
      </section>
    </main>
  );
}