import React, { useEffect, useState } from 'react';
import 'chart.js/auto'; // for registering all charts in web
import { ScrollToTop } from './components/scrollToTop/scrollToTop';
import { RouteHanding } from './pages/routes';
import AnimatedCursor from "react-animated-cursor"
import MouseCursorBackground from './components/animate_cursor';



function App() {

  return (
    <div className="
    relative
    w-full
    lg:pt-[96px] pt-[60px]">
      <MouseCursorBackground/>
      <ScrollToTop/>
      <RouteHanding/>
    </div>
  );
}

export default App;
