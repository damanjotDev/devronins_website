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
import { cn } from '../../lib/utils';



 const LandingOurServices = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      id: '1',
      title: "Backup & Recovery",
      description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
      imageUrl: HeroImage
    },
    {
      id: '2',
      title: "VoIP Solutions",
      description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
      imageUrl: HeroImage
    },
    {
        id: '3',
        title: "Consulting Planning",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
        imageUrl: HeroImage
    },
    {
        id: '4',
        title: "IT Consultency",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
        imageUrl: HeroImage
    },
    {
        id: '5',
        title: "Internet Thinking",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
        imageUrl: HeroImage
    },
    {
        id: '6',
        title: "Security & Compliance",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
        imageUrl: HeroImage
    },
    {
        id: '7',
        title: "Web Development",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
        imageUrl: HeroImage
    },
    {
        id: '8',
        title: "Digital Marketing",
        description: "Our goal is to propel your to business forward with world-class IT cybersecurity and technology. We provide the expert solutions.",
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
                <TypographyH1 title='Backup & Recovery' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-destructive' />

                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.OurServices)}>
                  <TypographyP title='Services' className='opacity-85 ' />
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
                We provide the necessary
                <span className="text-primary-foreground">{" services "}</span>
                to you
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
              <motion.div  
              className='flex relative group w-full'
              initial={{y: 10, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              viewport={{once: true}}
              transition={{duration:0.3, delay: 0.2*index}}
              layout>
                <div key={index}
                  className='h-[300px] relative p-3 bg-gray-400 overflow-hidden hover:border-primary hover:border w-full'>
                  {/* Image Section */}
                  <img src={ele.imageUrl} className='w-full h-full' />

                  {/* Introduction section */}
                  <div className='
                  group-hover:hidden
                  absolute
                  bottom-[-20px]
                  left-0
                  right-0
                  w-full
                  h-[100px]
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
                    items-center
                    justify-center
                    mt-[-10px]'>
                      <div className='flex'>
                        <TypographyH4 title={ele.title} className='text-white group-hover:text-black' />
                      </div>
                    </div>
                  </div>

                   {/* On hover div */}
                  <div className='
                  hidden
                  absolute
                  top-[0px]
                  left-0
                  right-0
                  bottom-[0px]
                  z-[15]
                  opacity-95
                  group-hover:block
                  group-hover:bg-primary
                 '/>

                 {/* on hover div content */}
                    <motion.div className='
                    hidden
                    absolute
                    top-[0px]
                    left-0
                    right-0
                    bottom-[0px]
                    z-[16]
                    group-hover:flex
                    flex-col
                    items-center
                    justify-center
                    py-10
                    px-5
                    gap-5'
                    initial={{y: 40}}
                    whileInView={{y:0}}
                    transition={{duration: 0.4}}>
                        <div className='flex text-center'>
                        <TypographyH5 title={ele.description} className='text-white font-[400]' />
                        </div>

                        <div onClick={()=> navigate(RoutesName.OurServices+"/backup-recovery")} className='flex'>
                        <TypographyH5 title={'Read more'} className='text-white p-2 px-3 bg-destructive ' />
                        </div>
                    </motion.div>
                </div>
              </motion.div>
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

export default LandingOurServices