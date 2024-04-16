import React, { useRef } from 'react';
import { TweenMax } from "../../utils/gsap"
import SlackImage from "../../assets/images/slack.png"
import DiamondImage from "../../assets/images/diamond.png";
import DriveImage from "../../assets/images/drive.png";
import SkypeImage from "../../assets/images/skype.png";
import LinedinImage from "../../assets/images/linkedin.png";
import { motion } from "../../utils/animation";

const HeroImageAnimation = () => {
    return (
        <div className='flex'>
            <motion.div
                id="slide"
                className="
                top-[8%]
                left-[20%]
                absolute
                bg-white
                px-2
                py-3
                lg:py-4
                lg:px-5
                w-[12%]
                h-[16%]
                rounded-lg"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 2.1}}>
                <img
                    src={SlackImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                top-[40%]
                left-[8%]
                px-2
                py-3
                lg:py-4
                lg:px-5
                absolute
                bg-white
                w-[13%]
                h-[17%]
                rounded-lg"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 2.2}}>
                <img
                    src={DiamondImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                bottom-[8%]
                left-[2%]
                px-2
                py-3
                lg:py-4
                lg:px-5
                bg-white
                w-[12%]
                h-[16%]
                rounded-lg"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 2.3}}>
                <img
                    src={DriveImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                top-[10%]
                right-[10%]
                px-2
                py-3
                bg-white
                w-[13%]
                h-[17%]
                rounded-lg"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 2.4}}>
                <img
                    src={SkypeImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>

            <motion.div
                id="slide"
                className="
                absolute
                bottom-[20%]
                right-[2%]
                p-2
                bg-white
                w-[14%]
                h-[18%]
                rounded-lg"
                initial={{y: -40, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 2.5}}>
                <img
                    src={LinedinImage}
                    className="w-[100%] h-[100%]" />
            </motion.div>
        </div>
    )
}

export { HeroImageAnimation }