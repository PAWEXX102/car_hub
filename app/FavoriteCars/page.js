import Link from "next/link";
import Image from "next/image";
import { CarCatalogue } from "../components/CarCatalogueFavorite";

export default function FavoriteCars() {
  return (
    <main className=" flex flex-col items-center text-center justify-start">
      <div className="flex flex-col md:flex-row text-start items-center  h-auto my-10 ">
        <div className="lg:ml-5 flex flex-col gap-10 text-center items-center w-full lg:text-start lg:items-start">
          <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl w-[20rem] lg:w-auto font-semibold lg:font-medium">
            Your favorite cars.
          </h1>
          <h1 className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-3xl text-gray-400 w-[20rem] lg:w-auto">
            Here are all the cars you liked
          </h1>
          <Link
            href={"/"}
            className=" bg-blue-600 rounded-full px-7 py-2 text-lg font-medium text-white hover:scale-110 duration-200"
          >
            Explore Cars
          </Link>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/heart.svg"
            alt="Hero"
            width={600}
            height={100}
            className=" mr-[20rem] rotate-[15deg] mt-14 z-2 object-fill"
          />
        </div>
      </div>
      <div className=" mt-10">
        <CarCatalogue />
      </div>
    </main>
  );
}
