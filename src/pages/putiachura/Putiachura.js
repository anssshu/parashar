import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Putiachura() {
    return (
        <div >
        <center>
            <h1>Putiachura</h1>
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

export default Putiachura
