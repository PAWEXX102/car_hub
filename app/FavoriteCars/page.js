import Link from "next/link";
import Image from "next/image";
import { CarCatalogue } from "../components/CarCatalogueFavorite";

export default function FavoriteCars() {
  return (
    <main className=" flex flex-col items-center text-center justify-center">
      <div className=" flex flex-row text-start items-center w-auto h-auto">
        <div className=" flex flex-col my-[10rem] ml-20 gap-7 text-start items-start">
          <h1 className=" text-8xl">Your favorite cars.</h1>
          <h1 className="text-3xl text-gray-400">
            Here are all the cars you liked
          </h1>
          <Link
            href={"/"}
            className=" bg-blue-600 rounded-full px-7 py-2 text-lg font-medium text-white hover:scale-110 duration-200"
          >
            Explore Cars
          </Link>
        </div>
        <div>
          <Image
            src="/heart.svg"
            alt="Hero"
            width={600}
            height={100}
            className=" ml-[20rem] rotate-[15deg] mt-14"
          />
        </div>
      </div>
      <div className=" mt-10">
        <CarCatalogue />
      </div>
    </main>
  );
}
