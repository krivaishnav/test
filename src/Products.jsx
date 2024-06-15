import React from "react";
import {data} from './Data'
// import {Friends} from './Data2'
import Product from "./Product"
import './Products.css'

function Products(){
    return(
        
        
        <div className="box">

            <Product id={data[0].id} title = {data[0].title} price = {data[0].price} images = {data[0].images} /> 
            <Product id={data[1].id} title = {data[1].title} price = {data[1].price} images = {data[1].images} />      
            <Product id={data[2].id} title = {data[2].title} price = {data[2].price} images = {data[2].images} />  
            <Product id={data[3].id} title = {data[3].title} price = {data[3].price} images = {data[3].images} />  
            <Product id={data[4].id} title = {data[4].title} price = {data[4].price} images = {data[4].images} />  
            <Product id={data[5].id} title = {data[5].title} price = {data[5].price} images = {data[5].images} />  
            <Product id={data[6].id} title = {data[6].title} price = {data[6].price} images = {data[6].images} />  
            <Product id={data[7].id} title = {data[7].title} price = {data[7].price} images = {data[7].images} />  
            <Product id={data[8].id} title = {data[8].title} price = {data[8].price} images = {data[8].images} />  
            <Product id={data[9].id} title = {data[9].title} price = {data[9].price} images = {data[9].images} /> 

            {/* {Data2.map((value,index)=>{ */}
                // return <
            // })}  
             </div>
    )

}export default Products