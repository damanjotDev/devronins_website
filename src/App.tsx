import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { Navbar } from './components/navbars/navbar';
import { Hero } from './components/hero/hero';
import Features from './components/features/features';


function App() {

  return (
    <div className="
    relative
    w-full
    xl:w-[85%] 
    xl:m-auto 
    h-auto
    lg:pt-[96px] pt-[60px]">

      {/* <RouteHanding/> */}
      <Navbar/>
      <Hero/>
      <Features/>

    </div>
  );
}

export default App;
