import React from 'react';
import { Navbar } from '../../components/navbars/navbar'
import { motion } from "../../utils/animation"
import contactBackgroudImage from "../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from '../../components/ui/Typography';
import { MdKeyboardDoubleArrowRight, FaCheckCircle, FiPhone, MdOutlineMarkEmailRead, IoLocationOutline } from "../../utils/icons"
import { RoutesName } from '../../utils/constant';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import HeroImage from "../../assets/images/hero.png"
import { useSocialLinkRoutes } from '../../hooks/useSocialLinkRoutes';
import { Progress } from '../../components/ui/progress';
import { cn } from '../../lib/utils';



const LandingOurTeamDetails = () => {
  const navigate = useNavigate();

  const teamMembersDetails =
  {
    id: '1',
    title: "Founder & CEO",
    name: 'Ashish Sudra',
    description: "Lead the team of passionate developers, designers and the strategists with a lot of thought and analysis come true!",
    social_links: useSocialLinkRoutes(),
    imageUrl: HeroImage
  }

  const progressData = [
    {
      id: 1,
      title: 'UI/UX',
      value: 90,
      fillColor: "gradient4"
    },
    {
      id: 2,
      title: 'Web Development',
      value: 95,
      fillColor: "gradient7"
    },
    {
      id: 3,
      title: 'App Development',
      value: 80,
      fillColor: "gradient6"
    }
  ]

  const addtionalSkills = [
    'Experienced Attorneys Professional.',
    'Experienced Attorneys Approach.',
    'Independence Makes Difference.',
    'Committed To Helping Our Clients.'
  ]

  return (
    <div className='w-full h-full'>
      <Navbar />

      {/* contact main section */}
      <div className='
    flex
    flex-col
    '>
        {/* Contact Background image section */}
        <div className='
      relative
      flex
      items-center
      justify-center'>
          <img src={contactBackgroudImage} className='h-[200px] lg:h-[300px]' />

          <div className='
          absolute
          flex
          items-center
          justify-center
          w-full
          h-full
          '>
            <div className='
              flex
              flex-col
              items-center
              gap-2
              '>
              <div className='flex text-white'>
                <TypographyH1 title='Our Team' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'>
                  <TypographyP title='Our Team' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Details Main section */}
        <div className='
        relative
        xl:w-[lg] 
        flex
        flex-col
        items-center
        h-auto
        px-5
        pt-20
        lg:px-20
        pb-20
        lg:gap-20
        gap-10
        '>
          {/* team member detail section */}
          <div className='
            w-full
            lg:w-[85%]
            flex
            flex-col
            gap-10
            p-5
            lg:p-10
            bg-white
            shadow-lg'>

            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>
              {/* Team member image */}
              <div className='lg:w-[43%] bg-gray-400 md:h-full h-[80%]'>
                <img src={teamMembersDetails.imageUrl} className='h-full w-full ' />
              </div>

              {/* Team member profile details */}
              <div className='
                     lg:w-[60%] 
                     flex
                     flex-col
                     gap-8
                     '>
                {/* Section 1 */}
                <div className='
                        flex
                        flex-col'>
                  <div className='flex'>
                    <TypographyH2 title={teamMembersDetails.name} className='font-bold text-4xl' />
                  </div>
                  <div className='flex'>
                    <TypographyP title={teamMembersDetails.title} className='text-primary font-semibold' />
                  </div>
                </div>

                {/* Section 2 */}
                <div className='
                        flex
                        flex-col'>
                  <div className='flex'>
                    <TypographyP title={teamMembersDetails.description} className='text-muted-foreground font-semibold' />
                  </div>
                </div>

                {/* Section 3 */}
                <div className='
                          flex
                          flex-col
                          gap-5'>
                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <FiPhone size={35} className='text-primary' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <TypographyH4
                          title='+880 154 654 457 45'
                          className='font-semibold text-lg' />
                      </div>
                      <div className='flex'>
                        <TypographyH4
                          title='+880 154 654 457 45'
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <IoLocationOutline size={35} className='text-primary ' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex'>
                        <TypographyH4
                          title='Support@gmail.com'
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-5 items-center'>
                    <div className='flex bg-card p-2 rounded-lg'>
                      <MdOutlineMarkEmailRead size={35} className='text-primary' />
                    </div>
                    <div className='flex flex-col'>
                      <div className='flex lg:w-[60%]'>
                        <TypographyH4
                          title='Ave 14th Street, khulna-1212,
                                        San Franciso, USA 4200.'
                          className='font-semibold text-lg' />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className='
                         w-[150px]
                        flex
                        items-center
                        justify-center
                        bg-white'>
                  {teamMembersDetails.social_links?.map(({ id, icon: Icon }, index) => (
                    <div
                      className={cn("flex border border-primary p-3 px-3",
                        index < teamMembersDetails.social_links?.length - 1 && "border-r-0"
                      )}>
                      <Icon
                        key={index}
                        className="
                          h-[15px] 
                          text-border
                          transition-all
                          cursor-pointer
                          hover:text-primary-foreground"/>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* skills section */}
            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>
              {/* Team member Activity section */}
              <div className=' lg:w-[50%]'>

                {/* Section 1 */}
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  <div className='flex -mb-3'>
                    <TypographyH2 title={'Activities'} className='font-bold text-4xl' />
                  </div>

                  <div className='flex'>
                    <TypographyP
                      title={'A hosted desktop solution allows for the delivery of a consistent and scalable IT experience for all users in an organisation.'}
                      className='text-muted-foreground font-semibold' />
                  </div>

                  {/* Addional skills */}
                  <div className='
                           flex
                           flex-col
                           gap-3'>
                    {addtionalSkills?.map((skill, index) => (
                      <div className='flex gap-4 items-center'>
                        <div className='flex'>
                          <FaCheckCircle size={20} />
                        </div>
                        <div className='flex'>
                          <TypographyP
                            title={skill}
                            className='font-semibold' />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team member profile details */}
              <div className='
                     lg:w-[50%] 
                     flex
                     flex-col
                     gap-8
                     '>
                {/* Progress Section */}
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  {progressData?.map((item) => (
                    <div className='
                            lg:w-[80%]
                            w-full
                            flex
                            flex-col
                            gap-3
                            text-secondary-foreground'
                      key={item.id}>
                      <div className='
                                flex
                                items-center
                                justify-between
                                '>

                        <div>
                          <TypographyP
                            title={item.title}
                            className='font-bold' />
                        </div>
                        <div>
                          <TypographyP
                            title={`${item.value}%`}
                            className='font-bold' />
                        </div>
                      </div>
                      <Progress
                        value={item.value}
                        className='h-2 rounded-full'
                        filledStyle={item.fillColor} />
                    </div>
                  ))}

                </div>
              </div>
            </div>

            {/* Addition infromation */}

            <div className='
                w-full
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:items-center
                '>
              {/* Team member Additional infromation section */}
              <div className='
                        flex
                        flex-col
                        gap-5'>

                <div className='flex -mb-3'>
                  <TypographyH2 title={'Information'} className='font-bold text-4xl' />
                </div>

                <div className='flex'>
                  <TypographyP
                    title={'Solly good codswallop what a plonker he nicked it bog-standard porkies gosh the full monty, wind up at public school hanky panky cheeky bugger Richard do one some dodgy chav bite your arm off. Argy-bargy excuse my French brown bread up the duff bleeder fanny around spend a penny barmy bonnet, bubble and squeak brolly bugger no biggie smashing get stuffed mate old lurgy, cup of tea nice one mufty that I knackered some dodgy chav. Say vagabond morish crikey excuse my French bonnet William blatant spend a penny, knackered bite your arm off what a plonker blimey smashing a blinding shot pardon me grub, wind up cracking goal Jeffrey hanky panky are you taking the piss such a fibber hunky-dory.'}
                    className='text-muted-foreground font-semibold' />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className='flex'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LandingOurTeamDetails
