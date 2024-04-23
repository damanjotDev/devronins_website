import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useNavbarRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: 'Home',
            navigate: () => navigate(RoutesName.Home),
            icon: RxDashboard,
            active: RoutesName.Home===location.pathname,
            label: 'Home'
            
        },
        {
            id: 'Pages',
            navigate: () => navigate(RoutesName.Pages),
            icon: MdOutlineAnalytics,
            active: RoutesName.Pages===location.pathname,
            label: 'Pages',
            dropdownItems: [
                {
                    id: 'our-team',
                    navigate: () => navigate(RoutesName.OurTeam),
                    label: 'Our Team',
                },
                {
                    id: 'team-details',
                    navigate: () => navigate(RoutesName.OurTeamDetails),
                    label: 'Team Details',
                }
            ]
        },
        {
            id: 'services',
            navigate: () => navigate(RoutesName.OurServices),
            icon: RxDashboard,
            active: RoutesName.Services===location.pathname,
            label: 'Services',
            dropdownItems: [
                {
                    id: 'our-services',
                    navigate: () => navigate(RoutesName.OurServices),
                    label: 'Our Services',
                },
                {
                    id: 'service-details',
                    navigate: () => navigate(RoutesName.OurServices+"/backup-recovery"),
                    label: 'Service Details',
                }
            ]
        },
        {
            id: 'Portfolio',
            navigate: () => navigate(RoutesName.Customer),
            icon: MdOutlineAnalytics,
            active: RoutesName.Portfolio===location.pathname,
            label: 'Portfolio',
            dropdownItems: [
                {
                    id: 'our-portfolio',
                    navigate: () => navigate(RoutesName.OurServices),
                    label: 'Our Portfolio',
                },
                {
                    id: 'portfolio-details',
                    navigate: () => navigate(RoutesName.OurTeam),
                    label: 'Portfolio Details',
                }
            ]
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useNavbarRoutes }