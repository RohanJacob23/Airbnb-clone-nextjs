import React, { useState } from "react";
import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Input, ActionIcon, Button } from "@mantine/core";
import {
  IconSearch,
  IconMenu2,
  IconWorld,
  IconUserCircle,
} from "@tabler/icons-react";
import { useRouter } from "next/router";

export default function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [numberOfGuests, setnumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());
  const selectRange = {
    startDate,
    endDate,
    key: "Selection",
  };
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndtDate(ranges.Selection.endDate);
  };

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toString(),
        endDate: endDate.toString(),
        numberOfGuests,
      },
    });
  };

  return (
    <>
      <section className="sticky top-0 z-50 grid grid-cols-3 justify-between items-center gap-5 md:gap-2 bg-white shadow-md p-5 md:px-10">
        {/* first Section */}
        <div
          className="relative flex items-center w-28 h-12 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://links.papareact.com/qd3"
            fill
            className="object-contain"
            alt="logo"
          />
        </div>

        {/* second section */}
        <div>
          <Input
            radius="xl"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            rightSection={
              <ActionIcon color="red" radius="xl" variant="filled">
                <IconSearch size="1.125rem" />
              </ActionIcon>
            }
            placeholder={placeholder || "Start your search"}
          />
        </div>

        {/* third section */}
        <div className="flex justify-end items-center gap-3 text-black/70">
          <p className="hidden md:block">Become a host</p>
          <IconWorld size="1.4rem" className="cursor-pointer" />

          <div className="flex items-end gap-2 py-1.5 px-2 border border-gray-400/75 border-solid  rounded-full">
            <IconMenu2 size="1.4rem" className="cursor-pointer" />
            <IconUserCircle size="1.4rem" className="cursor-pointer" />
          </div>
        </div>

        {/* calender section */}
        <div className="flex flex-col m-auto col-span-3">
          {searchInput && (
            <>
              <DateRangePicker
                ranges={[selectRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
              <div className="flex items-center border-0 border-b border-solid border-black/20 mb-4">
                <h2 className="m-0 text-2xl font-semibold flex-grow">
                  Number of Guests
                </h2>
                <div className="flex items-center">
                  <IconUserCircle size="1.5rem" />
                  <input
                    type="number"
                    name="number"
                    id="number"
                    className="w-12 pl-2 text-lg outline-none border-none text-red-400"
                    value={numberOfGuests}
                    onChange={(e) => setnumberOfGuests(e.target.value)}
                    min={1}
                  />
                </div>
              </div>

              {/* button */}
              <div className="flex justify-around">
                <Button
                  variant="white"
                  color="red"
                  onClick={() => setSearchInput("")}
                >
                  Cancel
                </Button>
                <Button variant="white" onClick={handleSearch}>
                  Search
                </Button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
