
import { useLocation } from "react-router-dom"
import { useProfileDropdown } from "../../hooks/useProfileDropdown";
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";
import React from "react";
import { cn } from "../../lib/utils";
import { TypographyH1, TypographyH3, TypographyH4, TypographyH5, TypographyP } from "../ui/Typography";
import { useNavbarRoutes } from "../../hooks/useNavbarRoutes";



const Navbar = () => {
  const navbarRoutes = useNavbarRoutes();
  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();

  return (
    <div className={`
        relative
        w-full`}>

      <motion.div className={`
          bg-backround
          flex
          items-center
          justify-between
          h-auto
          p-5
          ${scrolled && "fixed xl:w-[85%] w-full"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: scrolled ? 1 : 0, y: scrolled ? 0 : -10 }}
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

        {/* Navigation section */}

        <div className="
            flex
            items-center
            justify-between">

          {/* Page Navigation */}
          <div className="
              flex
              items-center">

            <NavigationMenu>
              <NavigationMenuList>

                {navbarRoutes?.map((item) => (
                  <div className="group">
                    <NavigationMenuItem >
                      <NavigationMenuTrigger  >
                        <TypographyH4 title={item.label} />
                      </NavigationMenuTrigger>

                      {item.active && 
                      <div
                      className="
                      border-b-[4px] 
                      border-primary 
                      w-[80%] 
                      m-auto
                      group-hover:opacity-1"/>}
                        <NavigationMenuContent>
                          <ul className="
                          flex
                          flex-col
                          p-2 
                          md:w-[150px] 
                          lg:w-[200px] ">
                           {item?.dropdownItems?.map((dropdownItem)=>(
                             <TypographyH5 title={dropdownItem} />
                           ))}
                          </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                  </div>
                ))}

              </NavigationMenuList>
            </NavigationMenu>

          </div>


        </div>

      </motion.div>

    </div>
  )
}

export { Navbar }
