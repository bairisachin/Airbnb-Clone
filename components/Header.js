import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    })
  }

  const seletctionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div>
      <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-4">
        {/* Left */}
        <div
          onClick={() => router.push("/")}
          className="relative flex items-center h-10 cursor-pointer my-auto"
        >
          <Image
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>

        {/* Middle - Search*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-grow pl-5 overflow-hidden bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start your Search"}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6" />

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
          </div>
        </div>

        {/* Calendar */}
        {searchInput && (
          <div className="flex flex-col col-span-3 mx-auto mt-5">
            <DateRangePicker
              ranges={[seletctionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-5">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <UserIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-1">
              <button onClick={resetInput} className="flex-grow text-gray-600 hover:bg-[#FD5B61] hover:text-white py-2 rounded-full transition duration-200 ease-out">
                Cancel
              </button>
              <button onClick={search} className="flex-grow text-red-400 hover:bg-[#FD5B61] hover:text-white py-2 rounded-full transition duration-200 ease-out">Search</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
