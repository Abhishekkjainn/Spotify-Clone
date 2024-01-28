import React from 'react';
import { RiHome3Fill } from 'react-icons/ri';
import { RiHome3Line } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';

function TopSideBar({ handleHome, setSelectedScreen }) {
  const [isHomeSelected, setIsHomeSelected] = useState(true);
  const [isSearchSelected, setIsSearchSelected] = useState(false);
  const handleHomeClick = () => {
    setIsHomeSelected(true);
    setIsSearchSelected(false);
    setSelectedScreen('home');
  };

  const handleSearchClick = () => {
    setIsHomeSelected(false);
    setIsSearchSelected(true);
    setSelectedScreen('search');
  };
  //   let isHomeSelected = true;
  //   let isSearchSelected = false;
  return (
    <div className="w-full h-[20%] bg-zinc-900 rounded-[15px] flex justify-center items-center flex-col ">
      <div
        className="w-[95%] h-[45%] hover:bg-zinc-800 rounded-[15px] flex justify-start items-center hover:text-white text-zinc-400"
        onClick={handleHomeClick}
      >
        <div className="mr-8 ml-3">
          {isHomeSelected ? (
            <RiHome3Fill color="white" size={24} />
          ) : (
            <RiHome3Line color="white" size={24} />
          )}
        </div>
        <div
          className={`${
            !isHomeSelected ? 'text-zinc-400' : 'text-white'
          } text-md font-semibold`}
        >
          Home
        </div>
      </div>
      <div
        className="w-[95%] h-[45%] hover:bg-zinc-800 rounded-[15px] flex justify-start items-center hover:text-white text-zinc-400"
        onClick={handleSearchClick}
      >
        <div className="mr-8 ml-3">
          {isSearchSelected ? (
            <RiSearchFill color="white" size={24} />
          ) : (
            <RiSearchLine color="white" size={24} />
          )}
        </div>
        <div className=" text-md font-semibold">Search</div>
      </div>
    </div>
  );
}

export default TopSideBar;
