import React from 'react'
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'
import { motion, useAnimation } from "../../utils/animation"
import { useFeatureCardData } from '../../hooks/useFeaturesCard'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FiSend, IoLocation, BsTelephoneFill } from "../../utils/icons"
import { useSocialLinkRoutes } from '../../hooks/useSocialLinkRoutes'

const Footer = () => {
    const socialLinkRoutes =  useSocialLinkRoutes();

    return (
        <div className='
        w-full
        relative
        bg-darkblue1
        h-auto'>

            {/* Footer top section */}
            <div className='
            w-full
            bg-darkblue2
            px-5
            py-7'>
                <div className='
                mx-auto
                xl:w-[lg]
                lg:px-20 
                flex
                flex-col
                md:flex-row
                md:items-center
                gap-5
                justify-between'>
                    <div className='
                flex
                flex-col
               '>
                        <TypographyH2
                            title='Looking for the Best IT Business Solutions?'
                            className='text-white tracking-normal font-semibold'
                        />
                        <div className='
                        flex
                        items-center
                        '>
                            <TypographyP
                                title='As a app web crawler expert, We will help to organize.'
                                className='text-white font-light opacity-65' />
                        </div>
                    </div>

                    <div className='flex'>
                        <button className="
                        w-[auto]
                        py-3
                        px-8
                        gradient3
                        rounded-full
                        group
                        transition-all
                        duration-200
                        hover:gradient5
                        ">
                            <TypographyH4 className="font-[500] text-md text-white" title="Get a quote" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Middle section */}
            <div className='
            w-full
            px-5
            lg:py-20
            py-10'>
                <div className='
                mx-auto
                xl:w-[lg]
                lg:px-20 
                grid
                lg:grid-cols-4
                gap-5'>

                    <div className="
                    flex
                    flex-col
                    gap-5
                    ">
                        <div className='
                        flex
                        items-center
                        '>
                            <img
                                src="https://www.devronins.com/images/DevRonins.png"
                                className="object-contain max-w-[150px]"
                            />
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='We work with a passion of taking challenges and creating new ones in advertising sector.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        <div className='flex'>
                            <button className="
                            w-[auto]
                            py-1
                            px-3
                            gradient3
                            rounded-full
                            group
                            transition-all
                            duration-200
                            hover:gradient5
                            ">
                                <TypographyP className=" text-sm text-white" title="About us" />
                            </button>
                    </div>

                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-4
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Newsletter' className='text-white'/>
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='Subscribe our newsletter to get our latest update & news.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        <div className="flex w-full max-w-sm items-center">
                            <Input className='bg-darkblue2 w-[80%] rounded-none border-0 focus-visible:ring-offset-0 text-white' type="email" placeholder="Email" />
                            <Button className='w-[20%] bg-primary rounded-none' type="submit"><FiSend size={20} className='text-white'/></Button>
                        </div>

                        <div className='flex'>
                            <TypographyP
                                title='Please select at least one list.'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                        </div>

                        {/* Social links */}

                        <div className="
                        flex
                        items-center
                        gap-3">
                            {socialLinkRoutes?.map(({id, icon: Icon})=> 
                            <Icon 
                            size={18} 
                            className="
                            mt-[-6px] 
                            text-border
                            transition-all
                            cursor-pointer
                            hover:text-primary-foreground"/> )}
                        </div>
                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-3
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Official info:' className='text-white'/>
                        </div>

                        <div className='flex gap-2 items-center'>
                           <div className='flex'>
                             <IoLocation size={20} className='text-primary'/>
                           </div>
                           <div className='flex'>
                           <TypographyP
                                title='30 Commercial Road
                                Fratton, Australia'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                           </div>
                        </div>

                        <div className='flex gap-3 items-center'>
                           <div className='flex ml-1'>
                             <BsTelephoneFill size={14} className='text-primary'/>
                           </div>
                           <div className='flex'>
                           <TypographyP
                                title='1-888-452-1505'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                           </div>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <div className='flex'>
                                <TypographyP
                                title='Open Hours:'
                                className='text-sm leading-normal text-white' />
                            </div>
                            <div className='flex'>
                                <TypographyP
                                title='Mon – Sat: 8 am – 5 pm,
                                Sunday: CLOSED'
                                className='text-sm leading-normal text-white font-light opacity-65' />
                            </div>
                        </div>
                    </div>

                    <div className="
                    flex
                    flex-col
                    gap-3
                    ">
                         <div className='
                        flex
                        items-center
                        '>
                            <TypographyH4 title='Gallery' className='text-white'/>
                        </div>

                        <div className='grid grid-cols-3 gap-2'>
                            {Array.from({length:6})?.map((ele)=>(
                                <div className='h-[65px] bg-gray-400'>

                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Footer bottom section */}
            <div className='
            w-full
            px-5
            py-7'>
                <div className='
                border-t-[1px]
                border-primary
                mx-auto
                xl:w-[55%]
                lg:w-[80%]
                flex
                items-center
                justify-center'>
                    <div className='
                    flex
                    flex-col
                    mt-2
                    '>
                       
                    <TypographyP
                        title='© 2024 Itfirm – CaseThemes. All rights reserved.'
                        className='text-white font-light' />

                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer