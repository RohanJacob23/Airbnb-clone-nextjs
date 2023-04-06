import React from "react";
import Image from "next/image";

export default function MediumCard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transition-transform duration-200 ease-out">
      <div className="relative w-80 h-80">
        <Image
          src={img}
          alt="card-Image"
          fill
          sizes="auto"
          className="object-contain rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3 m-0 font-semibold">{title}</h3>
    </div>
  );
}
