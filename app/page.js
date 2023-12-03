import Image from "next/image";
import { CarPrev } from "./components/CarPrev";
import { Cars } from "./constants";

export default function Home() {
  return (
    <main>
      <div className=" flex flex-row text-start items-center w-auto h-auto">
        <div className=" ml-20 flex flex-col gap-10 text-start items-start">
          <h1 className=" text-8xl">
            Find, book, rent a car-quick and super easy!
          </h1>
          <h1 className=" text-3xl text-gray-400">
            Streamline your car rental experience with our effortless booking
            process.
          </h1>
          <button className=" bg-blue-600 rounded-full px-7 py-2 text-lg font-medium text-white hover:scale-110 duration-200">
            Explore Cars
          </button>
        </div>
        <div className=" relative left-[20rem] bottom-[5rem]">
          <Image src="/hero-bg.png" alt="Hero" width={4000} height={4000} />
          <Image
            src="/hero.png"
            alt="Hero"
            width={5000}
            height={100}
            className=" absolute top-0 right-[20rem] z-2"
          />
        </div>
      </div>
      <div>
        <div className=" flex flex-row text-center items-center justify-between mx-[25rem]">
          <h1 className=" text-3xl font-medium">Car Catalogue</h1>
          <div className=" bg-slate-100 p-2 rounded-full flex gap-5 pl-12 border-2 border-gray-200">
            <div className=" flex flex-row gap-2">
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
                className=" bg-transparent"
              />
            </div>
            <div className=" flex flex-row gap-2">
              <Image src="/car-grey.svg" alt="Car" width={16} height={16} />
              <input
                type="text"
                name=""
                id=""
                placeholder="Car Model"
                className=" bg-transparent"
              />
              <button type="submit" className=" bg-white rounded-full p-3 ">
                <Image
                  src="/magnifier.svg"
                  alt="Search"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
          <div className=" flex gap-5">
            <div className=" flex p-2 rounded-lg border-2 border-gray-200">
              <h1 className="mr-1">Seats</h1>
              <select name="" id="">
                <option value="none"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className=" flex p-2 rounded-lg border-2 border-gray-200">
              <h1 className="mr-1">Year</h1>
              <select name="" id="">
                <option value="none"></option>
                <option value="2019">2019</option>
                <option value="2021">2021</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-20 mx-20 my-20 items-center text-center justify-center overflow-auto" style={{ maxWidth: 'calc(6 * 20rem)' }}>
        {Cars.map((car) => (
          <CarPrev car={car} />
        ))}
      </div>
    </main>
  );
}
