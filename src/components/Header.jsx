import React from "react";
import Image from "next/image";
import { Input } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { IconUserCircle } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconWorld } from "@tabler/icons-react";

export default function Header() {
  return (
    <>
      <section className="static top-0 z-50 flex justify-between items-center gap-5 md:gap-2 bg-white shadow-md p-5 md:px-10">
        {/* first Section */}
        <div className="relative flex items-center w-28 h-12 cursor-pointer">
          <Image
            src="https://links.papareact.com/qd3"
            fill
            className="object-contain"
            alt="logo"
          />
        </div>

        {/* second section */}
        <div className="w-2/5">
          <Input
            radius="xl"
            rightSection={
              <ActionIcon color="red" radius="xl" variant="filled">
                <IconSearch size="1.125rem" />
              </ActionIcon>
            }
            placeholder="Start your search"
          />
        </div>

        {/* third section */}
        <div className="flex items-center gap-3 text-black/70">
          <p className="hidden md:block">Become a host</p>
          <IconWorld size="1.4rem" className="cursor-pointer" />

          <div className="flex items-end gap-2 py-1.5 px-2 border border-gray-400/75 border-solid  rounded-full">
            <IconMenu2 size="1.4rem" className="cursor-pointer" />
            <IconUserCircle size="1.4rem" className="cursor-pointer" />
          </div>
        </div>
      </section>
    </>
  );
}
