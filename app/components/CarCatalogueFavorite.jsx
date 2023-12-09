"use client";

import Image from "next/image";
import { CarPrev } from "./CarPrev";
import { Cars } from "../constants";
import React, { useState, useEffect } from "react";
import { User } from "../User";

export const CarCatalogue = () => {
  const [CarModels, setCarModels] = useState("");
  const [CarManufactures, setCarManufactures] = useState("");

  const filteredCars = Cars.filter(
    (car) =>
      car.favorite === true &&
      (CarManufactures === "" ||
        car.manufacture
          .toLowerCase()
          .includes(CarManufactures.toLowerCase())) &&
      (CarModels === "" ||
        car.name.toLowerCase().includes(CarModels.toLowerCase()))
  );

  return (
    <div className="flex flex-col px-4 md:px-0 justify-center text-center">
      <div className="flex flex-col xl:flex-row text-center items-center justify-between w-full md:w-max gap-5 h-max md:mx-[20rem]">
        <h1 className="text-3xl font-medium mb-4 md:mb-0">Car Catalogue</h1>
        <div className="bg-slate-100 p-2 rounded-full flex flex-col md:flex-row gap-5 pl-12 border-2 text-center items-center border-gray-200">
          <div className="flex flex-row gap-2">
            <Image
              src="/repair_key.svg"
              alt="Repair Key"
              width={16}
              height={16}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Manufacture Name"
              className="bg-transparent"
              onChange={(e) => setCarManufactures(e.target.value)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <Image src="/car-grey.svg" alt="Car" width={16} height={16} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Car Model"
              className="bg-transparent"
              onChange={(e) => setCarModels(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col mx-4 md:mx-20 my-20 items-center text-center justify-center overflow-auto py-10"
        style={{ maxWidth: "calc(6 * 20vw)" }}
      >
        <div className="flex flex-wrap justify-center gap-20">
          {filteredCars.map((car, index) => (
            <CarPrev car={car} key={index} />
          ))}
        </div>
        <h1
          className={`text-3xl lg:text-5xl  font-semibold text-gray-400 mx-5 ${
            filteredCars.length === 0 ? "block" : "hidden"
          }`}
        >
          { User.SignedIn ?`Lack of cars that meet these requirements!`:'To see liked cars, you must login in or sign in!'}
        </h1>
      </div>
    </div>
  );
};
