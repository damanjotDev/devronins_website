
import { useLocation } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";


const Navbar = () => {

  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();

  return (
      <motion.div className={`
          fixed
          top-0
          z-[50]
          w-full
          xl:w-[85%] 
          xl:m-auto 
          shadow-lg
          bg-white
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3`}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}>

        {/* Logo Section */}
        <div className="
             w-auto
             flex
             items-center
            ">
          <img
            src="https://www.devronins.com/images/DevRonins.png"
            className="w-[70%] h-[40px]"
          />
        </div>

        {/* Navigation section  for Desktop*/}
        <DesktopNavbar/>

        {/* Navigation section for mobile */}
        <MobileNavbar/>

      </motion.div>
  )
}

export { Navbar }
