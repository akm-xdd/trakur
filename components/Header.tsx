"use client"

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
            className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 to-[#c84349] -z-50 rounded-md filter blur-3xl opacity-50"
        />
        <Image
          src="/logo-transparent-png-2.png"
          alt="Trakur Logo"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* Search Box */}
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          {/* Avatar */}
          <Avatar name="Anand Mishra" round size="50" />
        </div>
      </div>
        <div className="flex items-center justify-center py-2 md:py-5">
            <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#c84349]">
                <UserCircleIcon className="inline-block h-10 w-10 mr-1 text-[#c84349]" />
                Summarizing your tasks using AI...
            </p>
        </div>
    </header>
  );
}
export default Header;
