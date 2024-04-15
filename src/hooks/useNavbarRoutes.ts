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
                'Our Team',
                'Team Details'
            ]
        },
        {
            id: 'services',
            navigate: () => navigate(RoutesName.Services),
            icon: RxDashboard,
            active: RoutesName.Services===location.pathname,
            label: 'Services',
            dropdownItems: [
                'Our Services',
                'Service Details'
            ]
        },
        {
            id: 'Portfolio',
            navigate: () => navigate(RoutesName.Customer),
            icon: MdOutlineAnalytics,
            active: RoutesName.Portfolio===location.pathname,
            label: 'Portfolio',
            dropdownItems: [
                'Our Portfolio',
                'Portfolio details'
            ]
        }
    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useNavbarRoutes }