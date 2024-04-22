import React from 'react';
import { Navbar } from '../../components/navbars/navbar'
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeroImage from "../../assets/images/hero.png"
import { useSocialLinkRoutes } from '../../hooks/useSocialLinkRoutes';



export const LandingOurTeam = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: '1',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '2',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '3',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '4',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '5',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '6',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '7',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
    {
      id: '8',
      title: "Founder & CEO",
      name: 'Ashish Sudra',
      description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
      social_links: useSocialLinkRoutes(),
      imageUrl: HeroImage
    },
  ]

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
            lg:w-[85%]
            grid
            lg:grid-cols-4
            sm:grid-cols-2
            gap-10'>
            {teamMembers?.map((ele, index) => (
              <div  className='flex relative'>
                <div key={index}
                  className='h-[370px] relative p-3 bg-gray-400 overflow-hidden group hover:border-primary hover:border'>
                  {/* Image Section */}
                  <img src={ele.imageUrl} className='w-full h-full' />

                  {/* Introduction section */}
                  <div className='
                  absolute
                  bottom-[-20px]
                  left-0
                  right-0
                  w-full
                  h-[120px]
                  bg-black
                  opacity-85
                  skew-y-[-6deg]
                  group-hover:bg-white
                  group-hover:opacity-100'>
                    <div className='
                    p-4
                    skew-y-[6deg]
                    w-full
                    h-full
                    flex
                    flex-col
                    items-center'>
                      <div className='flex'>
                        <TypographyH4 title={ele.name} className='text-white group-hover:text-black' />
                      </div>
                      <div className='flex'>
                        <TypographyH5 title={ele.title} className='text-primary-foreground' />
                      </div>
                    </div>
                  </div>

                   {/* On hover div */}
                  <div className='
                  hidden
                  absolute
                  top-[-20px]
                  left-0
                  right-0
                  bottom-[100px]
                  skew-y-[-6deg]
                  z-[15]
                  opacity-95
                  group-hover:block
                  group-hover:bg-primary
                 '>
                    <motion.div className='
                    h-full
                    w-full
                 
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-10
                    px-5
                    gap-5'
                    initial={{y: 40,  skewY: 6}}
                    whileInView={{y:0, skewY: 6}}
                    transition={{duration: 0.4}}>
                       <div className='flex text-center'>
                        <TypographyH5 title={ele.description} className='text-white font-[400]' />
                      </div>

                      <div onClick={()=> navigate(RoutesName.OurTeamDetails)} className='flex p-2 bg-destructive group-hover:opacity-100'>
                        <TypographyH5 title={'Read more'} className='text-white' />
                      </div>
                    </motion.div>
                  </div>
                </div>

                 {/* social link section */}
                 <div className='
                  absolute
                  left-1/2
                  transform -translate-x-1/2
                  top-[94%]
                  z-[20]
                  group
                  '>
                    <div className='
                    flex
                    items-center
                    justify-center
                    gap-4
                    bg-white
                    border
                    p-3
                    px-3
                    group-hover:border-primary'>
                    {ele.social_links?.map(({id, icon: Icon}, index)=>(
                          <Icon 
                          key={index} 
                          className="
                          h-[15px] 
                          text-border
                          transition-all
                          cursor-pointer
                          hover:text-primary-foreground"/>
                    ))}
                    </div>
                </div>
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
