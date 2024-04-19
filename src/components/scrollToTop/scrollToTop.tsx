import React from 'react';
import { cn } from '../../lib/utils';
import useScrollHook from '../../hooks/useScrollbar'
import { motion } from "../../utils/animation"
import { GoArrowRight} from "../../utils/icons"

export const ScrollToTop = () => {
    const isScrolled = useScrollHook();

    const handleScrollToTop = () => {
       window.scrollTo({top: 0, behavior: 'smooth'}) 
    }

    return (
        <div className={cn("fixed bottom-[30px] right-[0px]", isScrolled && "block")}>
            <motion.div className='
            flex
            items-center
            justify-center
            p-2
            gradient3'
            onClick={handleScrollToTop}
            initial={{x: 40}}
            animate={{x:isScrolled?0:40}}
            exit={{x: !isScrolled?0:40}}
            transition={{duration:0.4}}>
                <GoArrowRight size={20} className='text-white rotate-[270deg]'/>
            </motion.div>
        </div>
    )
}

