import React from 'react'
import './Home.css'
import { ProductCard } from '../component/ProductCard'
import { Slider } from '../component/Slider'
import {useSelector} from 'react-redux'


export const Home = () => {
    const  products=useSelector((state)=>state.product.product);
    
  return (
    <>
    <Slider/>
    <div class="py-3 py-md-5 bg-light">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h4 class="mb-4" style={{textAlign:'center'}}>Our Products</h4>
            </div>
            {
                products.map((item,index)=>{
                    return <ProductCard key={index} item={item}/>
            })
            }
        </div>
    </div>
</div>
</>
  )
}
