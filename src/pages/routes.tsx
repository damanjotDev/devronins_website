import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingHomePage } from './landing/home';
import { RoutesName } from '../utils/constant';
import { LandingContactPage } from './landing/contact';


const RouteHanding = () => {

      const isLogin = false;

      if (isLogin) {
            return (
                 <Routes>
                        // Route for landing Home Page
                        <Route path="/" element={<LandingHomePage />} />
                 </Routes>
            )
      }


      else {
            return (
                  <Routes>
                       // Route for landing Home Page
                        <Route path={RoutesName.Home} element={<LandingHomePage />} />
                        // Route for landing Home Page
                        <Route path={RoutesName.Contact} element={<LandingContactPage />} />
                        {/* Not Found route */}
                        <Route path="*" element={<h1>Not Found</h1>} />
                  </Routes>
            )
      }
}

export { RouteHanding }