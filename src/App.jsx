import React from 'react';
import SideBar from './components/sideBar';
import MainBar from './components/mainBar';
import { useState } from 'react';

function App() {
  const [selectedScreen, setSelectedScreen] = useState('home');
  return (
    <div className="w-screen h-screen bg-black flex justify-start items-start overflow-hidden">
      <SideBar setSelectedScreen={setSelectedScreen} />
      <MainBar selectedScreen={selectedScreen} />
    </div>
  );
}
export default App;
