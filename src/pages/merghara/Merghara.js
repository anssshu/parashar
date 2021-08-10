import React from 'react'
import Images from "../../components/Images"
import {PageData} from "./PageData"
function Merghara() {
    return (
        <div >
        <center>
            <h1>Merghara Gambhariguda</h1>
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

export default Merghara
