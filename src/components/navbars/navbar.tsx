
import { useLocation } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import { useNavbarRoutes } from "../../hooks/useNavbarRoutes";
import { FaChevronDown, GoArrowRight, MdOutlineMenu, FiMenu} from "../../utils/icons"
import { cn } from "../../lib/utils";
import { useSocialLinkRoutes } from "../../hooks/useSocialLinkRoutes";


const Navbar = () => {
  const navbarRoutes = useNavbarRoutes();
  const socialLinkRoutes =  useSocialLinkRoutes();
  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();



  const textMotion = {
    rest: {
      color: "grey",
      scaleX: 0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "blue",
      scaleX: 1,
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  const textMotion1 = {
    rest: {
      width: 0,
      border:0,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      width: 18,
      height: 4,
      background: "hsl(var(--primary))",
      borderRadius: "5px",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      }
    }
  };

  return (
    <div className={`
        relative
        w-full`}>
      <motion.div className={`
          shadow-lg
          bg-backround
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3
          ${scrolled && "fixed xl:w-[85%] w-full"}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}>

        {/* Logo Section */}
        <div className="
             flex
             items-center
             justify-center
            ">
          <img
            src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/update-logo-light1.png"
            className="w-[120px] h-[50px]"
          />
        </div>

        {/* Navigation section  for Desktop*/}

        <div className="
            hidden
            lg:flex
            items-center
            justify-between
            gap-5">

          {/* Page Navigation */}
          <div className="
              flex
              items-center">

                {navbarRoutes?.map((item)=>(
                  <motion.div className="
                  relative
                  flex
                  flex-col
                  items-center
                  gap-2
                  p-4
                  group"
                  initial="rest" 
                  whileHover="hover" 
                  animate="rest">
                    
                    <div className="
                    flex
                    items-center
                    gap-2">
                      <TypographyH4 title={item.label}/>
                      <FaChevronDown 
                      size={15} 
                      className="
                      mt-2 
                      transition-all 
                      duration-500 
                      ease-in-out 
                      group-hover:rotate-180"/>
                    </div>
  
                    <motion.div className="
                      w-full
                      borber-b
                      border-[2px]
                      border-primary-foreground"
                      variants={textMotion}/>
  
                    {/* Drop down section */}
  
                    <div className={cn(`
                    hidden
                    absolute
                    w-auto
                    z-50
                    top-[100%]
                    left-0
                    flex-col
                    transition-all
                    duration-500
                    translate-y-[-20]
                    group-hover:flex
                    group-hover:translate-y-0`)}>
                     <div className={cn(`
                     bg-background 
                     shadow-lg 
                     rounded-lg
                     flex
                     flex-col 
                     gap-2 ${item?.dropdownItems?.length && "p-5"}`)}>
                          {item?.dropdownItems?.map((ele)=>(
                          
                              <motion.div className="
                                flex
                                items-center
                                w-[150px]
                                gap-2"
                                initial="rest" 
                                whileHover="hover" 
                                animate="rest">
                                  <motion.div className="
                                  borber-b
                                  border-primary-foreground"
                                  variants={textMotion1}/>
                                  <div className="
                                  flex
                                  items-center
                                  justify-center">
                                    <TypographyH5 className="group-hover:text-primary-foreground" title={ele}/>
                                  </div>
                                </motion.div>
                            
                          ))}
                     </div>
                    </div>
                  </motion.div> 
                ))}
          </div>

          {/* Social links */}

          <div className="
          flex
          items-center
          gap-3">
            {socialLinkRoutes?.map(({id, icon: Icon})=> <Icon size={18} className="mt-[-6px] text-border"/> )}
          </div>

          {/* Free Quote */}
          <div className="
          ml-4
          flex
          item-center
          ">
            <button className="
            flex
            items-center
            py-3
            px-6
            gap-3
            bg-muted
            rounded-md
            group
            text-primary-foreground
            transition-all
            duration-200
            hover:text-white
            hover:bg-primary
            ">
              <TypographyH5 className="font-[600]" title="Free Quote"/>
              <GoArrowRight 
              size={20}
              className="
              transition-all
              duration-300
              rotate-[-45deg]
              group-hover:rotate-0"/>
            </button>
          </div>
        </div>

        {/* Navigation section for mobile */}

        <div className="
        lg:hidden
        block">
          <Sheet>
            <SheetTrigger><FiMenu size={30}/></SheetTrigger>
            <SheetContent side="left"  className="w-[45%] flex flex-col">
             
                  {/* Logo Section */}
                  <div className="
                      flex
                      items-center
                      justify-start
                      mt-10
                      ">
                    <img
                      src="https://demo.casethemes.net/itfirm/wp-content/uploads/2021/11/update-logo-light1.png"
                      className="w-[120px] h-[50px]"
                    />
                  </div>

                  {/* Mobile Navigation section */}
                  <Accordion type="single" collapsible className="w-full gap-2">
                    {navbarRoutes?.map((item)=>(
                      <AccordionItem value={item.id}>
                      <AccordionTrigger className="py-3" >
                        <TypographyH4 title={item.label}/>
                      </AccordionTrigger>

                      <AccordionContent className="hover:text-primary-foreground flex flex-col gap-2">
                      {item?.dropdownItems?.map((ele)=>(
                        <TypographyH5 title={ele}/>
                      ))}
                      </AccordionContent>
                    </AccordionItem>
                    ))}
                  </Accordion>
             
            </SheetContent>
          </Sheet>
        </div>

      </motion.div>

    </div>
  )
}

export { Navbar }
