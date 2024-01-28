import React from 'react';
import AppBarMain from './appBarMain';
import FirstSongTilesix from './firstSongTilesix';
import MadeforAbhdi from './madeforAbhdi';

function HomeScreen() {
  return (
    <div className="text-white w-full h-full rounded-[15px] overflow-x-hidden overflow-y-scroll">
      <AppBarMain />
      <FirstSongTilesix />
      <MadeforAbhdi title={'Made for Abhdi'} />
      <MadeforAbhdi title={'Discover More From King'} />
      <MadeforAbhdi title={'Played Recently'} />
      <MadeforAbhdi title={'Made for Abhdi'} />
      <MadeforAbhdi title={'Discover More From King'} />
      <MadeforAbhdi title={'Played Recently'} />
    </div>
  );
}

export default HomeScreen;
