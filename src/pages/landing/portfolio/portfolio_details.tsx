import React, { useEffect } from 'react';
import { motion } from "../../../utils/animation"
import contactBackgroudImage from "../../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH4, TypographyH5, TypographyP } from '../../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle } from "../../../utils/icons"
import { RoutesName } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../../stateStore';
import { getTeamMembers } from '../../../services';
import { LoadingErrorWrapper } from '../../../components/common/loading_error_wrapper';
import { title } from 'process';
import { Progress } from '../../../components/ui/progress';
import PorfolioCard1 from './porfolio_card1';
import { useProjectPlatformHook } from './project-platform-hook';

const dummyData = [
  {
    id:"1",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1665384783424.png?alt=media&token=c72b177b-b52b-43db-a1fa-a8e6d6853368",
    title: "Business Card Generator App",
  },
  {
    id:"2",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664254124844.jfif?alt=media&token=db9bd1a0-e236-4a05-a1d6-e95b77cfa04f",
    title: "Conversation Analysis App"
  },
  {
    id:"3",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1669285103822.png?alt=media&token=efcc86bb-3bab-45ee-b4fd-cef2058a77a1",
    title: "Sports Coaching Web App"
  },
  {
    id:"4",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664161188116.png?alt=media&token=dc254cc2-a9b1-47ec-baf3-b1cebfb0f4ab",
    title: "Taplingua"
  },
  {
    id:"5",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664253869030.png?alt=media&token=7056015e-a0c4-4d01-964f-2375030033d5",
    title: "Car Pooling App"
  },
  {
    id:"6",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664252867201.jfif?alt=media&token=87108311-30da-4625-995e-c3aa4f5ef6ac",
    title: "Smart Lock",
  }
]

const portfolioDetails = {
    id:"1",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1665384783424.png?alt=media&token=c72b177b-b52b-43db-a1fa-a8e6d6853368",
    title: "Business Card Generator App",
    description : "ArborHawk serves arborists by facilitating immediate generation of arborist reports. The Arborist Report Generator (ARG) boasts a user-friendly interface, streamlining the creation of expert reports covering tree removal permits, tree protection zone plans, heritage tree documentation, residential requests, and commuting plans. Utilizing highly advanced AI language models, the ARG significantly reduces the time typically spent on traditional report writing.",
    project_images : [
        {
            id:'1',
            image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1665384783424.png?alt=media&token=c72b177b-b52b-43db-a1fa-a8e6d6853368",
            width: 1440,
            height: 3040
        },
        {
            id:"2",
            image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664254124844.jfif?alt=media&token=db9bd1a0-e236-4a05-a1d6-e95b77cfa04f",
            width: 311,
            height: 162
        },
        {
            id:"3",
            image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1669285103822.png?alt=media&token=efcc86bb-3bab-45ee-b4fd-cef2058a77a1",
            width: 1517,
            height: 931
        },
        {
            id:"4",
            image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1664161188116.png?alt=media&token=dc254cc2-a9b1-47ec-baf3-b1cebfb0f4ab",
            width: 250,
            height: 541
        },
    ],
}


  const addtionalSkills = [
    {
      id: '1',
      type: "web",
      description: 'Available on website'
    },
    {
      id: '2',
      type: "ios",
      description: 'Download from Ios App Store'
    },
    {
      id: '3',
      type: "android",
      description: 'Download from Play Store'
    },
  ]

  const progressData = [
    {
      id: 1,
      title: 'ReactJs',
      value: 90,
      fillColor: "gradient4"
    },
    {
      id: 2,
      title: 'ChatGPT',
      value: 95,
      fillColor: "gradient7"
    },
    {
      id: 3,
      title: 'React Native',
      value: 80,
      fillColor: "gradient6"
    }
  ]



const OurLandingPortfolioDetails = () => {

  const navigate = useNavigate();
  const { teamMembers, teamMembersListLoading, error} = useTypedSelector((state)=> state.TeamMember);
  const dispatch = useAppDispatch();
  const availablePlateform = useProjectPlatformHook();

  useEffect(()=>{
    dispatch(getTeamMembers())
  },[]);

  return (
    <LoadingErrorWrapper loading={teamMembersListLoading}>
      <div className='w-full h-full'>

      {/* contact main section */}
      <div className='
      flex
      flex-col'>
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
                <TypographyH1 title='Our Portfolio' className='font-semibold' />
              </div>
              <div className='flex items-center gap-2 text-white'>
                <div
                  className='flex cursor-pointer transition-all hover:text-primary-foreground'
                  onClick={() => navigate(RoutesName.Home)}>
                  <TypographyP title='Home' className='opacity-85 ' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'
                onClick={()=> navigate(-1)}>
                  <TypographyP title='Our Portfolio' className='opacity-85' />
                </div>

                <MdKeyboardDoubleArrowRight size={20} className='text-primary-foreground' />

                <div className='flex'>
                  <TypographyP title='Arborist Report Generator' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Details Main section */}
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
            {/* portfolio project images */}
            <div className='
            w-full
            h-full
            flex
            items-center
            justify-center'>
                <PorfolioCard1 item={portfolioDetails}/>
            </div>
          {/* porfolio detail section */}
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
               {/* available platform  section */}
               {addtionalSkills?.length?
                 <div className=' lg:w-[50%]'>

                 <div className='
                     flex
                     flex-col
                     gap-5'>
 
                   <div className='flex -mb-3'>
                     <TypographyH2 title={'Available Platforms'} className='font-bold text-4xl' />
                   </div>
 
                   <div className='
                            flex
                            flex-col
                            gap-5'>
                     {addtionalSkills?.map(({id, type, description}, index) => (
                       <div 
                       key={id}
                       className='flex gap-4 items-center'>
                         <div className='flex'>
                           {/* <FaCheckCircle size={20} /> */}
                           {type==='ios'?
                           <img src={availablePlateform['ios']} className='w-8 h-8'/>
                           :type==='web'?
                           <img src={availablePlateform['web']} className='w-8 h-8'/>
                           :type==='android'?
                           <img src={availablePlateform['android']} className='w-8 h-8'/>
                           :null
                           }
                         </div>
                         <div className='flex'>
                           <TypographyP
                             title={description}
                             className='font-semibold' />
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>:null}
              {/* Technology section */}
              <div className='
                     lg:w-[50%] 
                     flex
                     flex-col
                     gap-8
                     '>
              
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

            {/* Project description */}

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
                  <TypographyH2 title={'Description'} className='font-bold text-4xl' />
                </div>

                <div className='flex'>
                  <TypographyP
                    title={portfolioDetails?.description}
                    className='text-muted-foreground font-semibold' />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default OurLandingPortfolioDetails