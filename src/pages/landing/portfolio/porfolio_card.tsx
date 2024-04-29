import { cn } from '../../../lib/utils';
import React, { useEffect, useState } from 'react'
import { useImageSize } from 'react-image-size';
import {motion} from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';


const PorfolioCard = ({item}:{item:{id: string, image_url: string, title: string}}) => {
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
        w-full
        h-full
        flex
        flex-col
        gap-2
        items-center
        justify-center'
        key={item.id}
        initial={{x: 40}}
        whileInView={{x:0}}
        transition={{duration: 0.3}}
        viewport={{once: true}}>
            <motion.div 
            className={cn("relative px-2 py-1",
                deviceType==="mobile"?
                "h-[270px] w-[140px]"
                :"h-[240px] w-[400px]")}
                whileHover={{scale: 1.1}}
                transition={{duration: 0.4}}>
                {/* device image */}
                <div className='
                absolute
                top-0
                bottom-0
                left-0
                right-0'>
                    <img src={deviceType==="mobile"?
                        'https://portal.devronins.com/iphone.png':
                        'https://portal.devronins.com/mac.png'
                    } className='w-full h-full'/>
                </div> 
                <img
                src={item.image_url}
                alt="Your Image"
                className='w-full h-full'/>
            </motion.div>

            <div className='
            flex 
            items-center
            justify-center'>
                <TypographyH6 title={item?.title}/>
            </div>
        </motion.div>
    )
}

export default PorfolioCard

// https://portal.devronins.com/mac.png