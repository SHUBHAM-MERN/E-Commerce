import React from 'react'
import star from './star.png'
import './return_cart.css'
import {  useDispatch } from "react-redux";
import { removefrombasket } from './Action/action'

function Return_Cart_Itom(props) {
    const { id_, img_, price_, rating_, product_, time_, end_time } = props;
    const dispatch = useDispatch();
    return (
        <>
            

            
            <div className="main_Cart_itom">
                <div className="first_img">

                <img  src={img_} width="120x" height="80%" alt="" />
                </div>
                <div className="product_detail">

                <p>{product_}</p>
                <p><small><i className="fa fa-rupee-sign"></i></small>{price_}/-</p>
                    <p>
                    {
                        Array(rating_).fill().map(() => {
                            return <img src={star} width="18px" height="18px" alt="" srcset="" />
                        })
                    }
                    </p>
                    <p><button onClick={() => { dispatch(removefrombasket(id_)) }}>Remove From Cart</button></p>
                </div>
            </div>
        </>
    )
}

export default Return_Cart_Itom
