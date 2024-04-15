import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { Navbar } from './components/navbars/navbar';


function App() {

  return (
    <div className="
    xl:w-[85%] 
    xl:m-auto min-h-[2000px]  h-auto border-2">
      {/* <RouteHanding/> */}
      <Navbar/>
    </div>
  );
}

export default App;
