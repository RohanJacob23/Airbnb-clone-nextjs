import React from "react";
import Image from "next/image";

export default function SmallCards({ img, location, distance }) {
  return (
    <div className="flex items-center gap-3 m-2 mt-5 rounded-lg cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-200 ease-out">
      {/* left */}
      <div className="relative w-16 h-16">
        <Image
          src={img}
          fill
          alt="explore-image"
          sizes="auto"
          className="object-contain rounded-lg"
        />
      </div>

      {/* right */}
      <div>
        <h2 className="m-0 text-base font-semibold">{location}</h2>
        <h3 className="m-0 text-gray-500 text-base font-semibold">
          {distance}
        </h3>
      </div>
    </div>
  );
}
