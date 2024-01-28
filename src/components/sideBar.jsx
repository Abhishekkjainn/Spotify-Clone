import React from 'react';
import TopSideBar from './topSideBar';
import BottomSideBar from './bottomSideBar';

function SideBar({ setSelectedScreen }) {
  return (
    <div className="w-1/5 h-[85%] rounded-[15px] ml-2 mt-2 flex justify-between items-center flex-col">
      <TopSideBar setSelectedScreen={setSelectedScreen} />
      <BottomSideBar />
    </div>
  );
}

export default SideBar;
