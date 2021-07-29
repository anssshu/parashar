import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"



export const SidebarData = [
    {
        title:  "Home",
        path:   "/parashar/",
        icon: <AiIcons.AiFillHome/>,
        cName:"nav-text"
    },
    {
        title:"Reports",
        path:"/parashar/reports",
        icon:<IoIcons.IoIosPaper/>,
        cName:"nav-text"
    },
    {
        title:"Products",
        path:"/parashar/product",
        icon:<FaIcons.FaCartPlus/>,
        cName:"nav-text"
    },
    {
        title:"Team",
        path:"/team",
        icon:<IoIcons.IoMdPeople/>,
        cName:"nav-text"
    },
    {
        title:"Messages",
        path:"/parashar/messages",
        icon:<FaIcons.FaEnvelopeOpenText/>,
        cName:"nav-text"
    },
    {
        title:"Support",
        path:"/parashar/support",
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:"nav-text"
    },
]