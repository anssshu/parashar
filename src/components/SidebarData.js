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
        title:"Chilchila",
        path:"/parashar/chilchila",
        icon:<IoIcons.IoMdPeople/>,
        cName:"nav-text"
    },
    {
        title:"Template",
        path:"/parashar/template",
        icon:<IoIcons.IoIosPaper/>,
        cName:"nav-text"
    },
    
]