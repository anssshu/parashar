import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Shoshia() {
    return (
        <div >
        <center>
            <h1>Shoshia</h1>
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

export default Shoshia
