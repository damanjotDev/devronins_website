import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { Tilt } from '../../utils/parallax'
import { HeroBackgroundAnimation } from '../hero/heroBackgroundAnimation,'


const Experience = () => {

    const serviceButtonMotion = {
        rest: {
          width: '35%',
          transition: {
            duration: 0.3,
          }
        },
        hover: {
          width: '100%',
          background: 'hsl(var(--primary))',
          transition: {
            duration: 0.3
          }
        }
      };
    
    return (
        <div className='
        w-full
        realtive
        pt-20
        bg-background1'>
            {/* Experience Main section */}
            <div className='
             xl:w-[85%] 
             xl:m-auto 
            relative
            grid
            grid-cols-1
            lg:grid-cols-2
            h-auto
            lg:px-20 
            px-5
            py-20
            gap-20'>
                {/* Content Section */}
                <div className='
                flex
                flex-col
                gap-10'>
                    {/* Header section */}
                    <div className="
                    flex
                    flex-col
                    gap-5
                    ">
                        <div className='
                        flex
                        items-center
                        gap-5
                        text-primary-foreground'>
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                            <TypographyH3 title='Awesome features' />
                            <span className='h-[9px] w-[9px] bg-primary rounded-full' />
                        </div>

                        <div
                            className="
                            max-w-[400px]
                            md:max-w-[500px]
                            text-[30px]
                            font-bold 
                            lg:text-[45px]
                            md:leading-[55px]
                            leading-[45px]">
                            We Team Of
                            <span className="text-primary-foreground">{" Experience "}</span>
                            It Specialities
                        </div>

                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        text-secondary-foreground'>
                            <TypographyP
                                title='By optimizing your body’s innate capacity to heal, many chronic diseases can be mitigated.'
                                className='text-xl font-[250]' />
                        </div>

                    </div>

                    {/* Points Section */}
                    <div className='
                    flex
                    flex-col
                    gap-5'>

                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        gap-4
                        text-secondary-foreground'>
                            <div className='
                            gradient6
                            py-[4px]
                            px-[12px]
                            rounded-full
                            text-white
                            flex
                            items-center
                            justify-center'>1
                            </div>
                            <div className='
                            flex'>
                            <TypographyP
                                title='By optimizing your body’s innate capacity to heal, many chronic diseases can be mitigated.'
                                className='md:text-xl md:font-[250] font-[350]'/>
                            </div>
                        </div>
                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        gap-4
                        text-secondary-foreground'>
                            <div className='
                            gradient3
                            py-[4px]
                            px-[11px]
                            rounded-full
                            text-white
                            flex
                            items-center
                            justify-center'>2
                            </div>
                            <div>
                            <TypographyP
                                title='Our courses are made with experts, pack a ton of value and are binge-able.'
                                className='md:text-xl md:font-[250] font-[350]'/>
                            </div>
                        </div>
                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        gap-4
                        text-secondary-foreground'>
                            <div className='
                            gradient7
                            py-[4px]
                            px-[11px]
                            rounded-full
                            text-white
                            flex
                            items-center
                            justify-center'>
                                3
                            </div>
                            <div>
                            <TypographyP
                                title='This approach to health care addresses the root causes of disease and views the body as one integrated system.'
                                className='md:text-xl md:font-[250] font-[350]'/>
                            </div>
                        </div>

                    </div>

                    {/* Our Services */}
                    <div className="
                    mt-4
                    flex
                    item-center">
                    <motion.div className="
                    relative
                    flex
                    items-center
                    py-4
                    px-5
                    rounded-full
                    transition-all
                    duration-200
                    hover:px-7
                    hover:text-white"
                    initial="rest" 
                    whileHover="hover"
                    whileTap='hover'>
                        <TypographyH4 
                        className="
                        font-[500]
                        z-10" 
                        title="Our Services +"/>
                        <motion.div className='
                        absolute
                        left-0
                        w-full
                        h-full
                        bg-muted
                        rounded-full
                        flex
                        items-center
                        justify-center'
                        variants={serviceButtonMotion}
                        />
                    </motion.div>
                </div>
                </div>
                {/* Image Section */}
                <Tilt>
                    <motion.div
                        className='
                        flex 
                        items-center
                        justify-center'
                        initial={{x:'7%'}}
                        whileInView={{x:'0%'}}
                        transition={{duration: .7}}
                        viewport={{once: true}}>
                        <img
                            src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-section-shape1.png'
                            className='w-full h-full' />
                    </motion.div>
                </Tilt>

                 {/* Hero image animation */}
            <HeroBackgroundAnimation/>
            </div>
        </div>
    )
}

export default Experience