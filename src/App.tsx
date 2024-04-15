import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { Navbar } from './components/navbars/navbar';


function App() {

  return (
    <div className="
    xl:w-[85%] 
    xl:m-auto 
    h-auto">
      {/* <RouteHanding/> */}
      <Navbar/>
    </div>
  );
}

export default App;
