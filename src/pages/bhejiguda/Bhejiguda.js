import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Bhejiguda() {
    return (
        <div >
        <center>
            <h1>Bhejiguda</h1>
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

export default Bhejiguda
