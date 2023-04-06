import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";

export default function Banner() {
  return (
    <>
      <div className="relative w-full h-[18.75rem] sm:h-[25rem] lg:h-[31.25rem] xl:h-[37.5rem] 2xl:h-[45rem]">
        <Image
          src="https://links.papareact.com/0fm"
          fill
          className="object-cover"
          alt="image"
        />
        <div className="absolute top-1/2 w-full text-center">
          <h3 className="m-0 mb-3 text-sm sm:text-lg">
            Not sure where to go? Perfect
          </h3>
          <Button
            radius="xl"
            color="blue"
            variant="white"
            size="md"
            classNames={{ root: "shadow-xl bg-slate-50" }}
          >
            <div className="shadow-xl">I'm flexible</div>
          </Button>
        </div>
      </div>
    </>
  );
}
