import { cn } from '../../../lib/utils';
import React, { useEffect, useRef, useState } from 'react'
import { useImageSize } from 'react-image-size';
import { motion } from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';
import { Carousel, CarouselContent, CarouselItem } from '../../../components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import AppStoreImage from "../../../assets/images/app-store-1.png"

export function CardCarousel({ items }: { items: { id: string, image_url: string, width: number, height: number }[] }) {

    const handleImageLoad = (width: number, height: number) => {

        const aspectRatio = width / height
        if (aspectRatio <= 0.5) { // Mobile Aspect Ratios: 9:16 or 3:4
            return "mobile";
        } else if (aspectRatio <= 1.0) { // Tablet Aspect Ratios: 3:4 or 4:3
            return "ipad";
        } else if (aspectRatio > 1.0) { // Desktop Aspect Ratios: 16:9 or 16:10
            return "laptop";
        } else {
            return "mobile"; // If aspect ratio doesn't match any common types
        }
    };
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                loop: true
            }}
            className=''
        >
            <CarouselContent>
                {items?.map((ele)=>(
                     <CarouselItem key={ele.id} 
                     className='flex items-center justify-center'>
                     <motion.div
                         className={cn("relative px-2 py-1",
                         handleImageLoad(ele.width, ele.height) === "mobile" ?
                         "md:h-[590px] md:w-[280px] h-[450px]"
                         : "md:h-[590px] lg:w-[60%] md:w-[70%] w-full")}
                         initial={{x:'100%'}}
                         animate={{x:'0%'}}
                         transition={{duration:1}}>
                         {/* device image */}
                         <div className='
                         absolute
                         top-0
                         bottom-0
                         left-0
                         right-0'>
                             <img src={handleImageLoad(ele.width, ele.height) === "mobile" ?
                                 'https://portal.devronins.com/iphone.png' :
                                 'https://portal.devronins.com/mac.png'
                             } className='w-full h-full' />
                         </div>

                         <img 
                         src={ele.image_url}
                         alt="Your Image"
                         className='w-full h-full' 
                        />
                     </motion.div>
                 </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}


interface PortFolioCard1Props {
    id: string;
    image_url: string;
    title: string;
    project_images: {
        id: string;
        image_url: string;
        height: number;
        width: number
    }[]
}


const PorfolioCard1 = ({ item }: { item: PortFolioCard1Props }) => {
    return (
        <motion.div
            className='
        w-full
        h-full
        flex
        flex-col
        gap-5
        items-center
        justify-center'
            key={item.id}
            initial={{ x: 40 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <CardCarousel items={item.project_images} />
            <div className='
            flex 
            items-center
            justify-center'>
                <TypographyH6 title={item?.title} />
            </div>
        </motion.div>
    )
}

export default PorfolioCard1

// https://portal.devronins.com/mac.png