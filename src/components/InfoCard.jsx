import React from "react";
import Image from "next/image";
import {
  IconHeart,
  IconHeartFilled,
  IconStarFilled,
} from "@tabler/icons-react";

export default function InfoCard({
  img,
  location,
  description,
  title,
  star,
  price,
  total,
}) {
  return (
    <div className="flex items-center py-7 px-2 pr-4 border-b border-t-0 border-x-0 border-solid border-black/10 cursor-pointer hover:opacity-80 hover:shadow-xl transition-all duration-200 ease-out first:border-t">
      <div className="relative w-40 h-24 md:h-52 md:w-80 self-start md:self-center">
        <Image
          src={img}
          fill
          alt="Info-Image"
          className="object-cover rounded-2xl"
        />
      </div>

      <div className="vflex flex-col flex-grow pl-5">
        {/* first row */}
        <div className="flex justify-between items-center">
          <p className="m-0">{location}</p>
          <IconHeart size="1.25rem" />
        </div>

        {/* second row */}
        <h3 className="text-xl font-semibold m-0">{title}</h3>
        <div className="border-b border-x-0 border-t-0 border-solid border-black/25 w-10 pt-2" />
        <p className="m-0 pt-2 text-sm text-gray-500 flex-grows">
          {description}
        </p>

        {/* third row */}
        <div className="flex justify-between items-center">
          <p className="flex items-center m-0">
            <IconStarFilled size="1rem" className="text-[#f87171]" />
            {star}
          </p>

          <div>
            <p className="m-0 font-semibold text-lg lg:text-2xl">{price}</p>
            <p className="m-0 text-right">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
