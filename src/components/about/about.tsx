import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { Tilt } from '../../utils/parallax';
import { Progress } from '../ui/progress';


const progressData = [
    {
        id:1,
        title: 'UI/UX',
        value: 90,
        fillColor: "gradient4" 
    },
    {
        id:2,
        title: 'Web Development',
        value: 95,
        fillColor: "gradient7" 
    },
    {
        id:3,
        title: 'App Development',
        value: 80,
        fillColor: "gradient6" 
    }
]


const About = () => {

    return (
        <div className='
        w-full
        realtive
        pt-20'>

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
                {/* Image Section */}
                <Tilt>
                    <motion.div
                        className='
                        flex 
                        items-center
                        justify-center'
                        initial={{x:'-7%'}}
                        whileInView={{x:'0%'}}
                        transition={{duration: .7}}
                        viewport={{once: true}}>
                        <img
                            src='https://demo.casethemes.net/itfirm/wp-content/uploads/2021/12/h4-section-shape2.png'
                            className='w-full h-full' />
                    </motion.div>
                </Tilt>

                {/* Content Section */}
                <div className='
                flex
                flex-col
                justify-center
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
                            <TypographyH3 title='About our IT Company' />
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
                            We Are The
                            <span className="text-primary-foreground">{" Best "}</span>
                            IT Solution & Services
                        </div>

                        <div className='
                        lg:w-[85%]
                        w-full
                        flex
                        items-center
                        text-secondary-foreground'>
                            <TypographyP
                                title='Over 39,000 people work for us in more than 70 countries all This breadth of global coverage, combined with specialist.'
                                className='text-xl font-[250]' />
                        </div>

                    </div>

                    {/* Progress Section */}
                    <div className='
                    flex
                    flex-col
                    gap-5'>

                        {progressData?.map((item)=>(
                            <div className='
                            lg:w-[80%]
                            w-full
                            flex
                            flex-col
                            gap-3
                            text-secondary-foreground'
                            key={item.id}>
                                <Progress 
                                value={item.value} 
                                className='h-2 rounded-full'
                                filledStyle={item.fillColor}/>
                                <div className='
                                flex
                                items-center
                                justify-between
                                '>
    
                                   <div>
                                   <TypographyP
                                     title={item.title}
                                    className='font-bold' />
                                   </div>
                                   <div>
                                   <TypographyP
                                     title={`${item.value}%`}
                                    className='font-bold' />
                                   </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About