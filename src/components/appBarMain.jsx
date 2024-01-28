import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoMdNotifications } from 'react-icons/io';
import { IoPersonCircleOutline } from 'react-icons/io5';

function AppBarMain() {
  return (
    <div className="w-full h-[18%] flex justify-center items-center flex-col rounded-t-[15px] sticky top-0 bg-zinc-900">
      <div className="uppernavBar h-1/2 w-full flex justify-between items-center">
        <div className="backforwardbutton flex justify-center items-center w-[10%] h-full">
          <div className="bg-black rounded-full w-8 h-8 flex justify-center items-center mr-3">
            <IoIosArrowBack size={20} />
          </div>
          <div className="bg-black rounded-full w-8 h-8 flex justify-center items-center">
            <IoIosArrowForward size={20} />
          </div>
        </div>
        <div className="profilesection w-[30%] h-full flex justify-around mr-5 items-center">
          <div className=" hover:transition-all hover:scale-[1.05] explorebutton text-sm rounded-full pl-3 pr-3 pt-[6px] pb-[6px] bg-white text-black font-semibold">
            Explore Premium
          </div>
          <div className="installbutton hover:transition-all hover:scale-[1.05] text-sm rounded-full pl-3 pr-3 pt-[6px] pb-[6px] bg-black text-white font-semibold ">
            Install App
          </div>
          <div className="notificationbutton hover:transition-all hover:scale-[1.05] p-2 bg-black rounded-full">
            <IoMdNotifications />
          </div>
          <div className="profilebutton hover:transition-all hover:scale-[1.05] p-1 bg-black rounded-full">
            <IoPersonCircleOutline size={26} />
          </div>
        </div>
      </div>
      <div className="lowernavBar h-1/2 w-full flex justfify-start items-center">
        <div className=" mr-2 ml-6 pl-[8px] pr-[8px] pt-[8px] pb-[8px] bg-zinc-800 text-sm text-white w-[50px] flex justify-center items-center rounded-full font-semibold">
          All
        </div>
        <div className=" mr-2 pl-[8px] pr-[8px] pt-[8px] pb-[8px] bg-zinc-800 text-sm text-white w-[80px] flex justify-center items-center rounded-full font-semibold">
          Music
        </div>
        <div className="pl-[8px] pr-[8px] pt-[8px] pb-[8px] bg-zinc-800 text-sm text-white w-[100px] flex justify-center items-center rounded-full font-semibold">
          Podcast
        </div>
      </div>
    </div>
  );
}

export default AppBarMain;
