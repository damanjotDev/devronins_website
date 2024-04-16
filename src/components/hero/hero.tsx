
import { useLocation } from "react-router-dom"
import { motion } from "../../utils/animation";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5 } from "../ui/Typography";
import { HeroBackgroundAnimation } from "./heroBackgroundAnimation,";
import HeroImage  from "../../assets/images/hero.png";
import { TweenMax } from "../../utils/gsap"
import { useRef } from "react";
import { HeroImageAnimation } from "./heroImageAnimation";



const Hero = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const $this = containerRef.current;
    if (!$this) return;

    const relX = e.pageX - $this.offsetLeft;
    const relY = e.pageY - $this.offsetTop;

    TweenMax.to("#slide", 1, {
      x: ((relX - $this.offsetWidth / 2) / $this.offsetWidth) * -30,
      y: ((relY - $this.offsetHeight / 2) / $this.offsetHeight) * -30,
    });
  };

  const handleMouseLeave = () => {
    TweenMax.to("slide#", 1, {
      x: 0,
      y: 0,
    });
  };


  return (
    <motion.div 
    className={`relative w-full`}
    initial={{x: -300}}
    animate={{x: 0}}
    transition={{duration: 0.5}}>
       <div className={`
          shadow-lg
          gradient1
          flex
          flex-col
          items-center
          h-auto
          px-5 
          pt-8 
         `}>

            {/* Header section */}
            <div className="
            flex
            flex-col
            items-center
            ">
                <div 
                className="
                text-[35px]
                font-bold 
                lg:text-[60px]">
                    Learning, working
                </div>
                <div 
                className="
                text-[35px]
                font-bold 
                lg:text-[60px]
                mt-[-15px]">
                    and <span className="text-primary-foreground">vacationing</span>
                </div>
                <div className="
                mt-4
                flex
                item-center
                ">
                    <button className="
                    flex
                    items-center
                    py-4
                    px-10
                    gap-3
                    bg-primary
                    rounded-md
                    group
                    text-white
                    transition-all
                    duration-200
                    hover:text-white
                    hover:bg-black
                    ">
                        <TypographyH4 className="font-[500] text-md" title="Contact us for hire"/>
                    </button>
                </div>
            </div>

            {/*Hero Image section */}
            <div 
            ref={containerRef}
            id="container"
            className="
            relative
            mt-12
            w-full
            lg:w-[45%]
            md:w-[55%]
            flex
            items-center
            justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
                <div className="
                w-[60%]">
                     <img 
                        src={ HeroImage } 
                        className="
                        w-[100%]
                       " 
                        alt="Your Image"/>
                </div>

                {/* Hero Image  Animation Section */}
                <HeroImageAnimation/>

            </div>
            {/* Hero Background animation section */}
            <HeroBackgroundAnimation/>
            
      </div>
    </motion.div>
  )
}

export { Hero }
