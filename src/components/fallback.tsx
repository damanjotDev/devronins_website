import React from 'react'
import { motion } from "../utils/animation"

const FallbackLoading = () => {
    return (
        <div className='
        fixed
        w-full 
        top-0
        bottom-0
        h-screen
        flex
        items-center
        justify-center'>
            <motion.div className='w-[25px] h-[25px] relative'
            initial={{opacity: 70}}
            animate={{opacity: 100}}
            transition={{duration: 0.1}}
            exit={{opacity: 70}}>
                <motion.div
                    className='w-[80%] h-[80%] rounded-[50%] border-[3px] border-blue1 absolute flex items-center justify-center'
                    animate={{
                        top: ["0%", "100%", "100%", "0%", "0%"],
                        left: ["0%", "0%", "100%", "100%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        loop: Infinity,
                    }}
                >
                    <div className='h-[50%] w-[50%] bg-blue1 rounded-[50%]' />
                </motion.div>
                <motion.div
                    className='w-[80%] h-[80%] rounded-[50%] bg-blue2 absolute'
                    animate={{
                        top: ["100%", "100%", "0%", "0%", "100%"],
                        left: ["0%", "100%", "100%", "0%", "0%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        loop: Infinity,
                    }}
                />
                <motion.div
                    className='w-[80%] h-[80%] rounded-[50%] bg-blue1 absolute'
                    animate={{
                        top: ["100%", "0%", "0%", "100%", "100%"],
                        left: ["100%", "100%", "0%", "0%", "100%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        loop: Infinity,
                    }}
                />
                <motion.div
                    className='w-[80%] h-[80%] rounded-[50%] bg-blue2 absolute'
                    animate={{
                        top: ["0%", "0%", "100%", "100%", "0%"],
                        left: ["100%", "0%", "0%", "100%", "100%"],
                    }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        loop: Infinity,
                    }}
                />
            </motion.div>
        </div>
    )
}

export default FallbackLoading
