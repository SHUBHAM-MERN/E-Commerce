import React from 'react'
import { useSelector } from 'react-redux'
import Return_Cart_Itom from './Return_Cart_Itom';
import { useState } from "react"
import './cart.css'


function Cart() {
    const product_state = useSelector((selector) => selector.doaddtocart);
    console.log(product_state)
   
   
    return (
        <>
        <div className="cart_main">
            <h1>
                Order summery
            </h1>
            <div className="placeorder">
                <div className="inside_placeorder">

                <p>Subtotal(<span>{product_state.bucket.length} itoms</span>): <span><small><i className="fa fa-rupee-sign"></i></small><big>{  product_state.bucket.reduce((total, { price },) => {
                    console.log(total+price)
                    return total+price
                }, 0)}</big>/-</span></p>
                    <div className="cart_btn">

       <button >Place Order</button>
                    </div>
                </div>
            </div>
            {
                product_state.bucket.map(({ id, product, img, price, rating, time, sales_end }) => {
                     
                   
                     return <Return_Cart_Itom id_={id}
                     product_={product}
                     img_={img}
                     rating_={rating}
                     price_={price}
                     time_={time}
                     end_time={sales_end} ></Return_Cart_Itom>
                    
                })
            }
            </div>
            </>
    )
}

export default Cart
