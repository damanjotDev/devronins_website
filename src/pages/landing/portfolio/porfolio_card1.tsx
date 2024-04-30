import { cn } from '../../../lib/utils';
import React, { useEffect, useRef, useState } from 'react'
import { useImageSize } from 'react-image-size';
import { motion } from "../../../utils/animation"
import { TypographyH6 } from '../../../components/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { RoutesName } from '../../../utils/constant';
import { Carousel, CarouselContent, CarouselItem } from '../../../components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import Iphone from "../../../assets/images/iphone-14.png"

interface PortfolioDetails {
    createdAt: number;
    link: string;
    id: string;
    images: ImageDetails[];
    description: string;
    technologies: string[];
    isDeleted: number;
    name: string;
    technologyDetails: TechnologyDetails[];
  }
  
  interface ImageDetails {
    image: string;
    actualHeight: number;
    actualWidth: number;
    isCover: boolean;
    type: string;
    height: number;
  }
  
  interface TechnologyDetails {
    id: string;
    icon: string;
    description: string;
    isDeleted: number;
    title: string;
    createdAt: number;
  }

export function CardCarousel({ items }: { items: ImageDetails[] }) {

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
                {items?.map((ele, index)=>(
                     <CarouselItem key={index+1} 
                     className='flex items-center justify-center'>
                     <motion.div
                         className={cn("relative px-2",
                         ele.type === "iphone" ?
                         "md:h-[590px] md:w-[280px] h-[450px] py-1"
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
                             <img src={ele.type === "iphone" ?
                                 Iphone :
                                 'https://portal.devronins.com/mac.png'
                             } className='w-full h-full' />
                         </div>
                         <div className={
                            cn("w-full h-full bg-white pt-8",
                            ele.type === "iphone" && 'pt-2 px-1')}>
                            <img 
                            src={ele.image}
                            alt="Your Image"
                            className='w-auto h-full rounded-[40px]' 
                            />
                         </div>
                     </motion.div>
                 </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

const PorfolioCard1 = ({ item }: { item: PortfolioDetails }) => {
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
            <CardCarousel items={item.images} />
            <div className='
            flex 
            items-center
            justify-center'>
                <TypographyH6 title={item?.name} />
            </div>
        </motion.div>
    )
}

export default PorfolioCard1

// https://portal.devronins.com/mac.png