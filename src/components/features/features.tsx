import React from 'react'
import { TypographyH3, TypographyH4, TypographyP } from '../ui/Typography'

const Features = () => {
  return (
    <div className='
    h-[1000px]
    w-full
    realtive'>

        <div className='
        flex
        flex-col
        items-center
        h-auto
        lg:px-20 
        px-5
        pt-12'>
             {/* Header section */}
             <div className="
            flex
            flex-col
            items-center
            gap-3
            ">
                <div className='
                flex
                items-center
                gap-5
                justify-center
                text-primary-foreground'>
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                    <TypographyH3 title='Awesome features'/>
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                </div>

                <div 
                className="
                text-center
                max-w-[400px]
                md:max-w-[550px]
                text-[30px]
                font-bold 
                lg:text-[45px]
                md:leading-[60px]
                leading-[45px]">
                    Choose
                    <span className="text-primary-foreground">{" The Best "}</span>
                    IT Service Company
                </div>

                <div className='
                flex
                items-center
                justify-center
                text-secondary-foreground'>
                    <TypographyP 
                    title='An IT firm or MSP who keeps your IT running smoothly'
                    className='text-xl font-[250] text-center'/>
                </div>
               
            </div>

            {/* <div className='w-[200px] h-[200px] bg-blue4'>

            </div> */}
        </div>
    </div>
  )
}

export default Features