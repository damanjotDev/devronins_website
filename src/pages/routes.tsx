import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LandingHomePage } from './landing/home';
import { RoutesName } from '../utils/constant';
import { LandingContactPage } from './landing/contact';
import { LandingOurTeam } from './landing/our_team';
import { LandingOurTeamDetails } from './landing/team_details';


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
                        <Route path={RoutesName.OurTeam} element={<LandingOurTeam />} />
                        <Route path={RoutesName.OurTeamDetails} element={<LandingOurTeamDetails />} />
                        {/* Not Found route */}
                        <Route path="*" element={<h1>Not Found</h1>} />
                  </Routes>
            )
      }
}

export { RouteHanding }