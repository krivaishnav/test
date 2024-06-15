import React from "react"
import './item.css'

function Item({id,item,ispacked,isheavy,images}){
    return(
        <div >
            <p className="box2">ID - {id}</p> 
            <p className="box2">ITEM :- {item}</p>
            <p className="box2" style={{ backgroundColor: ispacked ? 'green': ""}} >PACKED  {ispacked}</p>
            { ispacked?  <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" style={{ width : '30px', paddingLeft:'180px' }} />:""} 

            <p className="box2" style={{ backgroundColor : isheavy ? 'black': "", color: isheavy ? "white":""}}> ISHEAVY  {isheavy}</p>
            <img src={images} width={'400px'} height={'450px'}/>

        </div>
    )
}
export default Item