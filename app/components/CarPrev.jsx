"use client";

import Image from "next/image";
import React, { useState } from "react";

export const CarPrev = ({ car }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="bg-gray-100 flex flex-col w-max rounded-2xl gap-1">
      <div className=" flex flex-row gap-14 px-5 pt-5">
        <h1 className=" text-xl font-medium">{car.name}</h1>
        <button onClick={() => setIsFavorited(!isFavorited)}>
          <Image
            src={`${isFavorited ? 'heart.svg' : 'heart-outline.svg'}`}
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
      <Image
        src={car.image}
        width={200}
        height={200}
        alt={"Car"}
        className=" p-3"
      />
      <div className=" flex flex-row justify-between mx-4 mb-2">
        <div className=" flex flex-col items-center">
          <Image
            src={"/steering-wheel.svg"}
            width={15}
            height={15}
            alt={"Car Door"}
          />
          <h1 className=" text-xs text-gray-400">{car.transmission}</h1>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/gear.svg"} width={15} height={15} alt={"Car Door"} />
          <h1 className=" text-xs text-gray-400">{`${car.seats} Seats`}</h1>
        </div>
        <div className=" flex flex-col items-center">
          <Image src={"/gas.svg"} width={15} height={15} alt={"Car Door"} />
          <h1 className=" text-xs text-gray-400">{`${car.fuel} MPG`}</h1>
        </div>
      </div>
    </div>
  );
};
