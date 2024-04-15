import { useMemo } from "react"
import { RoutesName } from "../utils/constant"
import { MdOutlineAnalytics, RxDashboard, FaFacebookF, FaTwitter, FaInstagram  } from "../utils/icons"
import {useLocation, Navigate, useNavigate} from "react-router-dom"


const useSocialLinkRoutes = () =>{
    const location = useLocation();
    const navigate = useNavigate();

    const routes = [
        {
            id: 'Facebook',
            navigate: () => navigate('#'),
            icon: FaFacebookF,
            label: 'Facebook'
        },
        {
            id: 'Twitter',
            navigate: () => navigate("#"),
            icon: FaTwitter,
            label: 'Twitter',
        },
        {
            id: 'Instagram',
            navigate: () => navigate("#"),
            icon: FaInstagram,
            label: 'Instagram',
        },

    ]

    return useMemo(()=>(routes),[location.pathname])

}

export { useSocialLinkRoutes }