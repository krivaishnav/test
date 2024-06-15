import React from "react"
import { items } from "./itemdata"
import Item from "./Item"

function Items(){
    return (
        <div className="box1">
            <ul>
            {items.map((item, index)=>{
                return <li >
                    
                <Item {...item} key={item.id} />
                {/* {item.item}:-{item.ispacked && 'packed'|| 'notpacked'}  */}
                
                
                 
                </li>
            })}
            </ul>
        </div>
    )
}   
export default Items