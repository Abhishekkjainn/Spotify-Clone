import React from 'react';
import HomeScreen from './homeScreen';
import SearchScreen from './searchScreen';
function MainBar({ selectedScreen }) {
  return (
    <div className="w-4/5 h-[85%] bg-zinc-900 m-2 rounded-[15px]">
      {selectedScreen == 'home' ? <HomeScreen /> : <SearchScreen />}
    </div>
  );
}

export default MainBar;
