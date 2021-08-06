import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";

function InfoCard({
  key,
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const flag = false;

  const [heart, setHeart] = useState(flag);

  function toggle() {
    heart ? setHeart(false) : setHeart(true);
  }

  console.log(heart);

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

          <button onClick={toggle}>
            {heart ? (
              <HeartIcon className="h-7 cursor-pointer text-[#FD5B61] transition active:translate-y-[-10px] duration-200 ease-in-out" />
            ) : (
              <HeartIcon className="h-7 cursor-pointer text-gray-700 transition active:translate-y-[-10px] active:rotate-360  duration-200 ease-in-out" />
            )}
          </button>
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
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
