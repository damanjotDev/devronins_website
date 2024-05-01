import React, { useEffect } from 'react';
import { motion } from "../../../utils/animation"
import contactBackgroudImage from "../../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyP } from '../../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaCheckCircle } from "../../../utils/icons"
import { RoutesName } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../../stateStore';
import { getTeamMembers } from '../../../services';
import { LoadingErrorWrapper } from '../../../components/common/loading_error_wrapper';
import PorfolioCard1 from './porfolio_card1';
import { useProjectPlatformHook } from './project-platform-hook';
import PlayStore from '../../../assets/images/play-app-store.png'
import { BsBrowserChrome, FaAppStoreIos, FaGooglePlay } from "../../../utils/icons"
import { Tilt } from '../../../utils/parallax';

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
  "isDeleted": 0,
  "id": "3YEkxAhOUvfrH5TIXWUH",
  "createdAt": 1707373077415,
  "technologies": [
      "BX6VZ5G2xAon1l9GkHF0",
      "JSIFPBymKU803SKCCspZ",
      "8IlrG73NLKiUV4JwNdIj"
  ],
  "images": [
      {
          "image": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1707373073736.png?alt=media&token=b69108d5-f3a7-4161-afc2-8fc8db7edca6",
          "isCover": true,
          "actualWidth": 232,
          "actualHeight": 482,
          "type": "iphone",
          "height": 492.46551724137936
      },
      {
          "isCover": false,
          "actualWidth": 233,
          "actualHeight": 477,
          "image": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1707373074651.png?alt=media&token=67660dd8-fb9e-4e60-a0fe-2503c0861d92",
          "type": "iphone",
          "height": 499.33047210300435
      },
      {
          "isCover": false,
          "image": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1707373337228.png?alt=media&token=d368b85b-cde2-40ec-bb97-5ed862cd8ee2",
          "actualWidth": 1835,
          "actualHeight": 926,
          "type": "mac",
          "height": 499.89645776566755
      },
      {
          "actualHeight": 913,
          "image": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1707373339909.png?alt=media&token=fa371fcf-e1f6-4e41-a0da-c3bc8b75f4e2",
          "isCover": false,
          "actualWidth": 1830,
          "type": "mac",
          "height": 503.7322404371585
      }
  ],
  "description": "ArborHawk serves arborists by facilitating immediate generation of arborist reports. The Arborist Report Generator (ARG) boasts a user-friendly interface, streamlining the creation of expert reports covering tree removal permits, tree protection zone plans, heritage tree documentation, residential requests, and commuting plans. Utilizing highly advanced AI language models, the ARG significantly reduces the time typically spent on traditional report writing.",
  "link": "https://arborhawk.com/",
  "name": "Arborist Report Generator",
  "technologyDetails": [
      {
          "isDeleted": 0,
          "id": "8IlrG73NLKiUV4JwNdIj",
          "createdAt": 1707373288044,
          "title": "ReactJs",
          "icon": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/technologyicon%2F1707373285311.png?alt=media&token=1503c18d-afc7-4e89-b507-8035e230c377",
          "description": "ReactJs"
      },
      {
          "icon": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/technologyicon%2F1707372955100.jpg?alt=media&token=cf5b15cc-7b33-4480-86cf-54db7506a448",
          "createdAt": 1707372961624,
          "title": "ChatGPT",
          "id": "BX6VZ5G2xAon1l9GkHF0",
          "description": "ChatGPT",
          "isDeleted": 0
      },
      {
          "isDeleted": 0,
          "id": "JSIFPBymKU803SKCCspZ",
          "title": "React Native",
          "createdAt": 1707373310860,
          "icon": "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/technologyicon%2F1707373307677.png?alt=media&token=759a63b7-d6f7-4bec-8a15-991433777b47",
          "description": "React Native"
      }
  ]
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

              {/* Description section */}
              <div className='
                     flex
                     flex-col
                     gap-8
                     '>
              
                <div className='
                    flex
                    flex-col
                    gap-5'>

                  <div className='flex -mb-3'>
                    <TypographyH2 title={'Description'} className='font-bold lg:text-4xl text-2xl' />
                  </div>

                  <div className='flex'>
                    <TypographyP
                      title={portfolioDetails?.description}
                      className='text-muted-foreground' />
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Technology section */}
        <div className='
         bg-secondary
         py-10
         pb-20
         px-5
         lg:px-20
         w-full
         flex
         flex-col
         items-center
         justify-center
         gap-10'>

          <div className='
          flex
          items-center
          gap-5
          text-primary-foreground'>
              <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
              <TypographyH2 title={'Technology'} className='font-bold lg:text-4xl text-2xl' />
              <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
          </div>

          <div className='
          flex
          flex-wrap
          lg:gap-10
          gap-5
          items-center'>
            {portfolioDetails?.technologyDetails?.map((technology, index)=>(
              <motion.div 
              className='
              relative
              p-4 
              bg-white 
              rounded-lg 
              shadow-lg 
              flex
              flex-col
              gap-1
              items-center'
              initial={{x:70,opacity: 0}}
              whileInView={{x:0, opacity: 100}}
              transition={{duration: 0.7, delay: 0.3*index, ease:'easeIn'}}
              viewport={{once: true}}>
              <img src={technology.icon} className='w-[100px] h-[100px]'/>
              <div className=''>
                <TypographyP title={technology.title} className='font-semibold' />
              </div>

              <motion.div
              className='absolute border-[1px] border-primary top-0 left-0 right-0'
              whileInView={{width:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
               <motion.div
              className='absolute border-[1px] border-primary top-0 bottom-0 right-0'
              whileInView={{height:['0%', '50%', '100%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary left-[100%] bottom-0 right-0'
              whileInView={{left:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
              <motion.div
              className='absolute border-[1px] border-primary top-[100%] bottom-0 left-0'
              whileInView={{top:['100%', '50%', '0%']}}
              transition={{duration: 1, ease:'linear'}}/>
            </motion.div>
            ))}
          </div>
        </div>

         {/* platform card section */}
         <div className='
         relative
         py-10
          px-5
          lg:px-20
          w-full
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-10
          bg-background1
          items-center'>
            <motion.div 
            className='w-full z-[10]'
            initial={{x:-50, opacity: 0}}
            whileInView={{x: 0, opacity: 100}}
            transition={{duration: 0.7, ease:'easeIn'}}
            viewport={{once: true}}>
             <Tilt>
               <img src={PlayStore} className='w-full md:h-[650px]'/>
             </Tilt>
            </motion.div>

            <div className='
                flex
                flex-col
                gap-5
                z-[10]'>

               <div className='
                flex
                items-center
                gap-5
                text-primary-foreground'>
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                    <TypographyH2 title={'Available Platforms'} className='font-bold lg:text-4xl text-2xl' />
                    <span className='h-[9px] w-[9px] bg-primary rounded-full'/>
                </div>

              <div className='
                flex
                flex-col
                gap-5
                lg:gap-7'>
                {addtionalSkills?.map(({id, type, description}, index) => (
                  <motion.div 
                  key={id}
                  className='flex gap-5 items-center group'
                  initial={{x:50, opacity: 0}}
                  whileInView={{x: 0, opacity: 100}}
                  transition={{duration: 0.7, delay: 0.1*index, ease:'easeIn'}}
                  viewport={{once: true}}>
                    <div className='flex group-hover:animate-bounce text-blue-500'>
                      {/* <FaCheckCircle size={20} /> */}
                      {type==='ios'?
                      <FaAppStoreIos className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :type==='web'?
                      <BsBrowserChrome className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :type==='android'?
                      <FaGooglePlay className='w-8 h-8 lg:w-12 lg:h-12'/>
                      :null
                      }
                    </div>
                    <div className='flex'>
                      <TypographyP
                        title={description}
                        className='font-semibold text-blue-500 underline' />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div className='
            absolute
            top-[20%]
            right-0
            h-[60%]
            w-[40%]
            gradient4
            blur-[100px]
            opacity-50'
            animate={{scale: [0.7, 1, 0.7]}}
            transition={{duration: 2, ease: "linear",
            repeat: Infinity,}}/>
              
          </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default OurLandingPortfolioDetails