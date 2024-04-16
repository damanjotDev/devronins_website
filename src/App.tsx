import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { Navbar } from './components/navbars/navbar';
import { Hero } from './components/hero/hero';


function App() {

  return (
    <div className="
    relative
    w-full
    xl:w-[85%] 
    xl:m-auto 
    h-[20000px]
    lg:pt-[96px]
    pt-[65px]">

      {/* <RouteHanding/> */}
      <Navbar/>
      <Hero/>
      
    </div>
  );
}

export default App;
