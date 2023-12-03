"use client";

import Image from "next/image";
import React, { useState } from "react";

export const CarPrev = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={` flex flex-col rounded-2xl gap-1 w-[15rem] h-[16rem] ${
        isHovered ? "bg-white drop-shadow-xl" : "bg-gray-100"
      } duration-200`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" flex flex-row gap-14 px-5 pt-5 items-center text-center">
        <div className=" flex gap-2">
          <Image src={car.mark} width={32} height={32} alt={"MarkLogo"} />
          <h1 className=" text-xl font-medium">{car.name}</h1>
        </div>
        <button onClick={() => setIsFavorited(!isFavorited)}>
          <Image
            src={`${isFavorited ? "heart.svg" : "heart-outline.svg"}`}
            width={20}
            height={20}
            alt={"Heart"}
          />
        </button>
      </div>
      <div className=" flex flex-row ml-5">
        <h1 className="font-medium text-sm">$</h1>
        <h1 className=" text-2xl font-bold">{car.price}</h1>
        <h1 className=" relative text-sm top-2">/day</h1>
      </div>
      <div className=" justify-center flex">
        <Image
          src={car.image}
          width={200}
          height={200}
          alt={"CarImage"}
          className=" p-3"
        />
      </div>

      <div
        className={` flex flex-row justify-between mx-4 mb-2 ${
          isHovered ? "hidden" : "block"
        }`}
      >
        <div className=" flex flex-col items-center">
          <Image
            src={"/steering-wheel.svg"}
            width={15}
            height={15}
            alt={"Car Transmission"}
          />
          <h1 className=" text-xs text-gray-400">{car.transmission}</h1>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/gear.svg"} width={15} height={15} alt={"Car Seats"} />
          <h1 className=" text-xs text-gray-400">{`${car.seats} Seats`}</h1>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/gas.svg"} width={15} height={15} alt={"Car Fuel"} />
          <h1 className=" text-xs text-gray-400">{`${car.fuel} MPG`}</h1>
        </div>
      </div>
      <button
        className={`${
          isHovered ? "block" : "hidden"
        } bg-blue-500 text-white mx-10 p-1 rounded-full hover:scale-105 duration-200`}
      >
        View More
      </button>
    </div>
  );
};
