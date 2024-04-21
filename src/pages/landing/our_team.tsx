import React from 'react';
import { Navbar } from '../../components/navbars/navbar'
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';

export const LandingOurTeam = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-full'>
      <Navbar />

      {/* contact main section */}
      <div className='
    flex
    flex-col
    '>
        {/* Contact Background image section */}
        <div className='
      relative
      flex
      items-center
      justify-center'>
          <img src={contactBackgroudImage} className='h-[200px] lg:h-[300px]' />

          <div className='
          absolute
          flex
          items-center
          justify-center
          w-full
          h-full
          '>
            <div className='
              flex
              flex-col
              items-center
              gap-2
              '>
              <div className='flex text-white'>
                <TypographyH1 title='Our Team' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'>
                  <TypographyP title='Our Team' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Main section */}
        <div className='
      relative
      xl:w-[lg] 
      flex
      flex-col
      items-center
      h-auto
      px-5
      pt-20
      lg:px-20
      pb-20
      lg:gap-20
      gap-10
      '>
          <div className='
          flex
          flex-col
          items-center
          gap-10'>

            {/* Team Header section */}
            <div className='
                flex
                justify-center
                items-center
                lg:w-[70%]'>
              <div
                className="
                text-center
                    text-3xl
                    font-bold 
                    lg:text-4xl">
                Passionate Personalities,
                <span className="text-primary-foreground">{" Versatile "}</span>
                Brains
              </div>
            </div>
          </div>

          <div className='
            w-full
            lg:w-[90%]
            grid
            lg:grid-cols-4
            md:grid-cols-2
            gap-10'>
              {Array.from({length: 8})?.map((index, ele)=>(
                <div className='h-[350px] bg-gray-400'>

                </div>
              ))}
          </div>
        </div>

        <div className='flex'>
          <Footer />
        </div>
      </div>
    </div>
  )
}


