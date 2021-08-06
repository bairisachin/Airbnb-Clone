import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex flex-col md:flex-row py-7 md:px-2 md:pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-in-out first:border-t ">
      <div className="relative mb-5 sm:mb-0 h-44 w-screen sm:h-52 sm:w-80 flex-shrink-0">
        <Image
          className="rounded-lg"
          src={img}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col flex-grow md:pl-5">
        <div className="flex justify-between">
          <p className="text-sm text-gray-400">{location}</p>
          <HeartIcon className="h-7 cursor-pointer " />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />{star}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
