import { cn } from '../../../lib/utils';
import React, { useEffect, useState } from 'react'
import { useImageSize } from 'react-image-size';
import {animate, motion} from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';


const PorfolioCard = ({item, index}:{item:{id: string, image_url: string, title: string}, index: number}) => {
    const navigate = useNavigate();

    const [dimensions, { loading, error }] = useImageSize(item.image_url);
    const [deviceType, setDeviceType] = useState('mobile')

    const handleImageLoad = (width: number, height: number) => {

         const  aspectRatio = width/ height
        if (aspectRatio <= 0.5) { // Mobile Aspect Ratios: 9:16 or 3:4
            setDeviceType("mobile");
        } else if (aspectRatio <= 1.0) { // Tablet Aspect Ratios: 3:4 or 4:3
            setDeviceType("ipad");
        } else if (aspectRatio>1.0) { // Desktop Aspect Ratios: 16:9 or 16:10
            setDeviceType("laptop");
        } else {
            setDeviceType("mobile"); // If aspect ratio doesn't match any common types
        }
    };


    useEffect(()=>{
        if(dimensions?.height && dimensions?.width){
            handleImageLoad(dimensions.width, dimensions.height)
        }
    },[dimensions])

    if(loading){
        return <h1>loading...</h1>
    }
    
    return (
        <motion.div 
        className='
        relative
        w-full
        h-full
        flex
        flex-col
        items-center
        justify-center
        shadow-lg
        overflow-hidden
        bg-white'
        key={item.id}
        initial={{x: 40, opacity: 0}}
        whileHover='hover'
        whileInView={{x:0, opacity: 100}}
        transition={{duration: 0.5, delay: 0.1*index, ease:'easeIn'}}
        viewport={{once: true}}
        onClick={()=> navigate(RoutesName.OurPortfolio+"/"+item.id)}>
            <motion.div 
               className={cn("relative p-2 rounded-lg",
                deviceType==="mobile"?
                "h-[270px] w-[140px]"
                :"h-[270px] w-[full]")}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.4}}>
                {/* device image */}
                {/* <div className='
                absolute
                top-0
                bottom-0
                left-0
                right-0'>
                    <img src={deviceType==="mobile"?
                        'https://portal.devronins.com/iphone.png':
                        'https://portal.devronins.com/mac.png'
                    } className='w-full h-full'/>
                </div>  */}
                <img
                src={item.image_url}
                alt="Your Image"
                className='w-full h-full rounded-lg'/>
            </motion.div>

            <div className='
            flex 
            items-center
            justify-center
            p-2'>
                <TypographyH6 title={item?.title}/>
            </div>

            <motion.div
              className='absolute border-[1px] border-primary top-0 left-0 right-0 rounded-b-[100px]'
              whileInView={{width:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
               <motion.div
              className='absolute border-[1px] border-primary top-0 bottom-0 right-0'
              whileInView={{height:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary left-[100%] bottom-0 right-0'
              whileInView={{left:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary top-[100%] bottom-0 left-0'
              whileInView={{top:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
           
        </motion.div>
    )
}

export default PorfolioCard

// https://portal.devronins.com/mac.png