import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Template() {
    return (
        <div >
        <center>
            <h1>Template</h1>
            {PageData.map((item,index)=>{
                return(
                    <Images img={item.image}/>
                )
            }
            
            )}
            
        </center>
       
        
        
    </div>
    )
}

export default Template
