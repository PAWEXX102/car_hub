"use client";

import Image from "next/image";
import { CarPrev } from "./CarPrev";
import { Cars } from "../constants";
import React, { useState, useEffect } from "react";
import { User } from "../User";

export const CarCatalogue = () => {
  const [SelectMotorType, setSelectMotorType] = useState("fuel");
  const [SelectYear, setSelectYear] = useState(null);
  const [CarModels, setCarModels] = useState("");
  const [CarManufactures, setCarManufactures] = useState("");

  const HandleSeats = (e) => {
    setSelectMotorType(e.target.value);
  };

  const HandleYear = (e) => {
    setSelectYear(e.target.value);
  };

  const HandleManufacture = (e) => {
    setCarManufactures(e.target.value);
  };

  const HandleModels = (e) => {
    setCarModels(e.target.value);
  };

  const filteredCars = Cars.filter(
    (car) =>
      car.favorite === true &&
      car.motorType === SelectMotorType &&
      car.MakeData <= SelectYear &&
      (CarManufactures === "" ||
        car.manufacture
          .toLowerCase()
          .includes(CarManufactures.toLowerCase())) &&
      (CarModels === "" ||
        car.name.toLowerCase().includes(CarModels.toLowerCase()))
  );

  console.log(filteredCars.length);

  return (
    <div className="flex flex-col px-4 md:px-0 justify-center text-center">
      <div className="flex flex-col md:flex-row text-center items-center justify-between mx-auto w-full md:w-max gap-5 h-max md:mx-[25rem]">
        <h1 className="text-3xl font-medium mb-4 md:mb-0">Car Catalogue</h1>
        <div className="bg-slate-100 p-2 rounded-full flex flex-col md:flex-row gap-5 pl-12 border-2 border-gray-200">
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
              onChange={HandleManufacture}
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
              onChange={HandleModels}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-4 md:mt-0">
          <div className="flex p-2 rounded-lg border-2 border-gray-200">
            <h1 className="mr-1">Motor type:</h1>
            <select name="MotorTypeSelect" id="" onChange={HandleSeats}>
              <option value="fuel">Fuel</option>
              <option value="electric">Electric</option>
              <option value="gas">Gas</option>
            </select>
          </div>
          <div className="flex p-2 rounded-lg border-2 border-gray-200">
            <h1 className="mr-1">Year:</h1>
            <select
              name="YearSelect"
              id=""
              onChange={HandleYear}
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
          className={`text-5xl font-semibold text-gray-400 mx-auto ${
            filteredCars.length === 0 ? "block" : "hidden"
          }`}
        >
          Lack of cars that meet these requirements!
        </h1>
      </div>
    </div>
  );
};
