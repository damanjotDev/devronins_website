import React, { useEffect } from 'react';
import { Navbar } from '../../components/navbars/navbar';
import { Hero } from '../../components/hero/hero';
import Features from '../../components/features/features';
import Experience from '../../components/experience/experience';
import About from '../../components/about/about';
import Analytics from '../../components/analytics/analytics';
import Steps from '../../components/steps/steps';
import Reviews from '../../components/reviews/reviews';
import Footer from '../../components/footer/footer';
import { ScrollToTop } from '../../components/scrollToTop/scrollToTop';



export const LandingHomePage = () => {
 
  return (
    <div className='w-full h-full'>
      <ScrollToTop/>
      <Navbar/>
      <Hero/>
      <Features/>
      <Experience/>
      <About/>
      <Analytics/>
      <Steps/>
      <Reviews/>
      <Footer/>
    </div>
  )
}