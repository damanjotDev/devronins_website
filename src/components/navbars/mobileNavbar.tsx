
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
import { FiMenu } from "../../utils/icons";


const MobileNavbar = () => {
  const navbarRoutes = useNavbarRoutes();

  return (
        <div className="
        lg:hidden
        block">
          <Sheet>
            <SheetTrigger><FiMenu size={30}/></SheetTrigger>
            <SheetContent side="left"  className="w-[300px] flex flex-col gap-1">
             
                  {/* Logo Section */}
                  <div className="
                      flex
                      items-center
                      justify-start
                      mt-4">
                    <img
                    src="https://www.devronins.com/images/DevRonins.png"
                    className="object-contain max-w-[70%]"
                    />
                  </div>

                  {/* Mobile Navigation section */}
                  <Accordion type="single" collapsible className="w-full gap-2">
                    {navbarRoutes?.map((item)=>(
                      <AccordionItem value={item.id}>
                      <AccordionTrigger className="py-3" >
                        <TypographyH4 title={item.label}/>
                      </AccordionTrigger>

                      <AccordionContent className="flex flex-col gap-2">
                      {item?.dropdownItems?.map((ele)=>(
                        <TypographyH5 className="hover:text-primary-foreground flex flex-col" title={ele}/>
                      ))}
                      </AccordionContent>
                    </AccordionItem>
                    ))}
                  </Accordion>
             
            </SheetContent>
          </Sheet>
        </div>
  )
}

export {MobileNavbar }
