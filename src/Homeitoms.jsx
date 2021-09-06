import React from "react";
import { addtobasket } from "./Action/action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./homeitoms.css";
import home_product from './home_product'
import { Link } from "react-router-dom";
import Star from './star.png'


function Homeitoms(props) {
  const dispatch = useDispatch();
  const product_state = useSelector((selector) => selector.doaddtocart);
  const { id_, img_, price_, rating_, product_, time_, end_time, product_link_ } = props;
  
  
  const [state, setstate] = useState("")
  function msToTime(time) {
    const expire_time = new Date(time).getTime();
    const duration = expire_time -(new Date().getTime())
   
    const Days = Math.floor(duration / 86400000)
    const remaining_days = duration % 86400000;
    
    const Hours = Math.floor(remaining_days / 3600000)
    const remaining_hours = remaining_days % 3600000;

    const Minits = Math.floor(remaining_hours / 60000)
    const remaining_minits = remaining_hours % 60000;

    const Seconds = Math.floor(remaining_minits / 1000)
    const remaining_seconds = remaining_minits % 1000;

  
    const last = Days + "days"+"   AND   " + Hours + ":" + Minits + ":" + Seconds;
    
    setstate(last);
  }
  setInterval(() => {
  
    if (end_time) {
     
      msToTime(end_time)
   }
    
  }, 1000);
  return (
    
    <>
      <div className="section_itom">
        <div className="productimg">
          <Link to={`${product_link_}`}>
          <img src={img_} alt="not able to load" />
          </Link>
        </div>
        <div className="product_mid">
          <p>Brand New {product_}</p>
          <p>
            <span>
              
              <i className="fa fa-rupee-sign"></i>
              {price_}/-
            </span>
          </p>
          {
            Array(rating_).fill().map(() => {
              return <img src={Star} width="15px" alt="" srcset="" />
            })
          }
          {
            home_product.map(({ id }) => {
              if (id == id_) {
                if (end_time) {
                  return  <p className="displayed">   sales end in <b>{state}</b> </p>
                }
              }
            })
         }
          

        </div>
        <div className="addtobtn">
          <button
            onClick={() => {
              dispatch(
                addtobasket({ id_, img_, price_, rating_, product_, time_ })
              );
            }}
          >
            Add To Basket
          </button>
        </div>
      </div>
    </>
  );
}

export default Homeitoms;
