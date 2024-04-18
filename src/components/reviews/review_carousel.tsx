
import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import { FaStar } from '../../utils/icons'
import { TypographyH2, TypographyH3, TypographyH4, TypographyP } from "../ui/Typography"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function CarouselDApiDemo() {
  return (
    <Carousel className="w-full transparent ">
      <CarouselContent className="border-0 gap-[100%]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card className="border-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <CardContent 
                className="
                flex
                flex-col
                gap-10
                px-6
                py-10
                h-auto">
                  <div className="
                  flex
                  gap-2">
                    {Array.from({length: 5}).map((_, index)=>(
                      <FaStar key={index} size={20} className="border-0 text-yellow-500 "/>
                    ))}
                  </div>
                  <div className='
                    flex
                    text-secondary-foreground'>
                        <TypographyP
                            title="“Working with several word press themes and templates the last years, I only can say this is the best in every level. I use it for my company and the reviews that I have already are all excellent. Support is helping to fix my issues now.”"
                            className='text-xl' />
                  </div>
                  <div className="
                  flex
                  items-center
                  gap-3">
                   <Avatar className="w-[100px] h-[100px] border-[3px] border-primary flex items-center justify-center">
                   <Avatar className="w-[90%] h-[90%]">
                    <AvatarImage src="https://github.com/shadcn.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                   </Avatar>
                    
                    <div className="
                    flex
                    flex-col
                    items-center
                    gap-1">
                      <TypographyH3 title="Sachin Diwar"/>
                      <TypographyH4 className="text-primary" title="CEO /Founder"/>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[75%] top-[95%] w-[50px] h-[50px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border-0"/>
      <CarouselNext className="left-[85%] top-[95%] w-[50px] h-[50px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border-0"/>
    </Carousel>
  )
}
