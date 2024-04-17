import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { Tilt } from '../../utils/parallax';


const About = () => {

    return (
        <div className='
        w-full
        realtive
        pt-20'>

            {/* Experience Main section */}
            <div className='
            relative
            grid
            grid-cols-1
            lg:grid-cols-2
            h-auto
            lg:px-20 
            px-5
            py-20
            gap-20'>
                {/* Image Section */}
                <Tilt>
                    <div
                        className='
                        flex 
                        items-center
                        justify-center'>
                        <img
                            src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-section-shape2.png'
                            className='w-full h-full' />
                    </div>
                </Tilt>

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
                            h-7
                            w-[35px]
                            rounded-full
                            text-white
                            flex
                            items-center
                            justify-center'>
                                1
                            </div>
                            <div>
                                <TypographyP
                                    title='By optimizing your body’s innate capacity to heal, many chronic diseases can be mitigated.'
                                    className='text-xl font-[250]' />
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
                            h-7
                            w-[30px]
                            rounded-full
                            text-white
                            flex
                            items-center
                            justify-center'>
                                2
                            </div>
                            <div>
                                <TypographyP
                                    title='Our courses are made with experts, pack a ton of value and are binge-able.'
                                    className='text-xl font-[250]' />
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
                            h-7
                            w-[45px]
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
                                    className='text-xl font-[250]' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About