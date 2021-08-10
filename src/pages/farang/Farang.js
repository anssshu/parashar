import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Farang() {
    return (
        <div >
        <center>
            <h1>Farang</h1>
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

export default Farang
