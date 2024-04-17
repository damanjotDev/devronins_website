import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { Navbar } from './components/navbars/navbar';
import { Hero } from './components/hero/hero';
import Features from './components/features/features';
import Experience from './components/experience/experience';
import About from './components/about/about';


function App() {

  return (
    <div className="
    relative
    w-full
    h-auto
    xl:w-[85%] 
    xl:m-auto 
    lg:pt-[96px] pt-[60px]">

      {/* <RouteHanding/> */}
      <Navbar/>
      <Hero/>
      <Features/>
      <Experience/>
      <About/>

    </div>
  );
}

export default App;
