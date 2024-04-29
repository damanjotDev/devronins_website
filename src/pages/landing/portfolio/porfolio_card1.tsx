import { cn } from '../../../lib/utils';
import React, { useEffect, useRef, useState } from 'react'
import { useImageSize } from 'react-image-size';
import {motion} from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';

interface PortFolioCard1Props {
    id: string;
    image_url: string;
    title: string;
    project_images: {
        id: string;
        image_url: string
    }[]
}


const PorfolioCard1 = ({item}:{item: PortFolioCard1Props}) => {
    const navigate = useNavigate();

    const timerId = useRef<any>(null)

    const [imageNumber, setImageNumber] = useState(0)
    const [dimensions, { loading, error }] = useImageSize(item.project_images[imageNumber]?.image_url);
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

    useEffect(()=>{
        timerId.current = setInterval(()=>{
            setImageNumber((prev)=>{
                if(prev===item.project_images?.length-1){
                    return 0
                }
                return prev+1
            })
        },2000)

        return ()=> clearInterval(timerId.current)
    },[])

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
        transition={{duration: 1}}
        viewport={{once: true}}
        onClick={()=> navigate(RoutesName.OurPortfolio+"/"+item.id)}>
            <motion.div 
            className={cn("relative px-2 py-1",
                deviceType==="mobile"?
                "md:h-[520px] md:w-[260px]"
                :"h-[auto] lg:w-[60%] md:w-[70%] w-full")}>
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
                src={item.project_images[imageNumber]?.image_url}
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

export default PorfolioCard1

// https://portal.devronins.com/mac.png