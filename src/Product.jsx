import React from 'react'

function Product(props){
    let{id,title,price,images} = props

    return(
        <div>
            <p className='box1'>ID - {id}</p>
            <p className='box1'>Product - {title}</p>
            <p className='box1'>Price - {price}</p>
            <img src= {images}/>
        </div>
    )
}
export default Product