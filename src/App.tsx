import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { ScrollToTop } from './components/scrollToTop/scrollToTop';
import { RouteHanding } from './pages/routes';



function App() {

  return (
    <div className="
    relative
    w-full
    lg:pt-[96px] pt-[60px]">

      <ScrollToTop/>
      <RouteHanding/>
    </div>
  );
}

export default App;
