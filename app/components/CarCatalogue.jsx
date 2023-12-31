"use client";

import Image from "next/image";
import { CarPrev } from "./CarPrev";
import React, { useState } from "react";
import { Cars } from "../constants";
export const CarCatalogue = () => {
  const [SelectMotorType, setSelectMotorType] = useState("fuel");
  const [SelectYear, setSelectYear] = useState("2017");
  const [CarModels, setCarModels] = useState("");
  const [CarManufactures, setCarManufactures] = useState("");


  const filteredCars = Cars.filter(
    (car) =>
      car.motorType === SelectMotorType &&
      car.MakeData <= SelectYear &&
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
        <div className="flex flex-col md:flex-row gap-5 mt-4 md:mt-0 items-center text-center">
          <div className="flex p-2 rounded-lg border-2 border-gray-200 w-max">
            <h1 className="mr-1">Motor type:</h1>
            <select name="MotorTypeSelect" id="" onChange={(e) => setSelectMotorType(e.target.value)}>
              <option value="fuel">Fuel</option>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
            </select>
          </div>
          <div className="flex p-2 rounded-lg border-2 border-gray-200 w-max">
            <h1 className="mr-1">Year:</h1>
            <select
              name="YearSelect"
              id=""
              onChange={(e) => setSelectYear(e.target.value)}
              className="overflow-auto"
            >
              <option value="2017">2017</option>
              <option value="2019">2019</option>
              <option value="2021">2021</option>
              <option value="2023">2023</option>
            </select>
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
          className={`text-3xl lg:text-5xl font-semibold text-gray-400 mx-5 ${
            filteredCars.length === 0 ? "block" : "hidden"
          }`}
        >
          Lack of cars that meet these requirements!
        </h1>
      </div>
    </div>
  );
};
