import React, { useEffect } from 'react';
import { Hero } from '../../components/hero/hero';
import Features from '../../components/features/features';
import Experience from '../../components/experience/experience';
import About from '../../components/about/about';
import Analytics from '../../components/analytics/analytics';
import Steps from '../../components/steps/steps';
import Reviews from '../../components/reviews/reviews';
import { ScrollToTop } from '../../components/scrollToTop/scrollToTop';



export const LandingHomePage = () => {
 
  return (
    <div className='w-full h-full'>
      <ScrollToTop/>
      <Hero/>
      <Features/>
      <Experience/>
      <About/>
      <Analytics/>
      <Steps/>
      <Reviews/>
    </div>
  )
}