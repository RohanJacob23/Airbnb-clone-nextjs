import Image from "next/image";
import React from "react";
import { Button } from "@mantine/core";

export default function LargerCart({ img, title, description, buttonTxt }) {
  return (
    <>
      <section className="relative pt-16 pb-8">
        {/* image */}
        <div className="relative h-96 min-w-[18.75rem]">
          <Image
            src={img}
            fill
            sizes="auto"
            alt="image"
            className="object-cover rounded-2xl"
          />
        </div>

        {/* texts */}
        <div className="absolute top-20 left-12">
          <h3 className="text-4xl mb-3 m-0 w-64 font-semibold">{title}</h3>
          <p className="m-0">{description}</p>
          <Button radius="md" color="dark" classNames={{ root: "mt-5" }}>
            {buttonTxt}
          </Button>
        </div>
      </section>
    </>
  );
}
