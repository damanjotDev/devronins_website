import React, { useEffect } from 'react';
import { motion } from "../../../utils/animation"
import contactBackgroudImage from "../../../assets/images/conatctBackground.png"
import { TypographyH1, TypographyH4, TypographyH5, TypographyP } from '../../../components/ui/Typography';
import { IoLocation, MdKeyboardDoubleArrowRight, FaFacebookF, FaTwitter, FaInstagram } from "../../../utils/icons"
import { RoutesName } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import { useAppDispatch, useTypedSelector } from '../../../stateStore';
import { getTeamMembers } from '../../../services';
import { LoadingErrorWrapper } from '../../../components/common/loading_error_wrapper';
import PorfolioCard from './porfolio_card';
import { title } from 'process';

const dummyData = [
  {
    id:"1",
    image_url: "https://firebasestorage.googleapis.com/v0/b/devroninsportfolio.appspot.com/o/proposal%2F1665384783424.png?alt=media&token=c72b177b-b52b-43db-a1fa-a8e6d6853368",
    title: "Business Card Generator App"
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
    title: "Smart Lock"
  }
]

const OurLandingPortfolio = () => {

  const navigate = useNavigate();
  const { teamMembers, teamMembersListLoading, error} = useTypedSelector((state)=> state.TeamMember);
  const dispatch = useAppDispatch();

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

                <div className='flex'>
                  <TypographyP title='Our Portfolio' className='opacity-85' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* portfolio section */}
        <div className='
        relative
        xl:w-[75%] 
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-3
        md:grid-cols-2
        items-center
        h-auto
        px-5
        pt-20
        lg:px-20
        pb-20
        md:gap-y-20
        md:gap-x-20
        gap-10
        '>
          {dummyData?.map((item)=>(
            <PorfolioCard item={item}/>
          ))}
        </div>
      </div>
    </div>
    </LoadingErrorWrapper>
  )
}

export default OurLandingPortfolio