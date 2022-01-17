import React from "react";
import cart from "./cart.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Dropbox from "./Dropbox";

function Navbar() {
  const [redirect, setredirect] = useState();
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log(Cookies.get("login_jwt"));
  }, []);

  const product_state = useSelector((selector) => selector.doaddtocart);
  console.log(product_state);
  const popup = () => {
    const popup = document.getElementById("popupmenu");

    popup.style.width = "20%";
    setDisplay(true);
  };
  const closemenu = () => {
    let popup = document.getElementById("popupmenu");

    popup.style.width = "0%";
    setDisplay(false);
  };

  const signout = () => {
    const signout = document.getElementById("signout");
    console.log(signout.innerHTML);
    if (signout.innerHTML == "Sign Out") {
      console.log("inside");
      Cookies.remove("login_jwt");
      setredirect("login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar_main">
          <div className="left_section">
            <div className="navbar_img_logo">
              <Link to="/">
                <img
                  src="https://i.pinimg.com/originals/fe/48/95/fe4895b707309434c52e4f7a9bfe4114.jpg"
                  height="35px"
                  width="50px"
                  alt=""
                  srcSet=""
                />
              </Link>
            </div>
            <div className="navbar_search">
              <input type="text" placeholder="search your favorite itom" />
              <button>
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
          <div className="navbar_rightsection">
            <div>
              <ul>
                <Link to={Cookies.get("login_jwt") ? "/signup" : "/login"}>
                  <li id="signout" onClick={signout}>
                    {Cookies.get("login_jwt") ? "Sign Out" : "Sign In"}
                  </li>
                </Link>
                <Link to="/login">
                  <li>
                    Login <p>To GRAVITY</p>
                  </li>
                </Link>
                <Link to="/login">
                  <li>Prime Membership</li>
                </Link>
              </ul>
            </div>
            <div className="cart_img">
              <Link to="/cart">
                <div className="Cart_flex">
                  <img src={cart} width="32px" alt="" srcset="" />
                  <span>{product_state.bucket.length}</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="navbar2">
        <div className="side_menu" onClick={popup}>
          &#9776;
        </div>
        <div className="nevbar2_right">
          <ul>
            <li>
              <Link>Top Rating</Link>
            </li>
            <li>
              <Link>Tranding</Link>
            </li>
            <li>
              <Link>Gift</Link>
            </li>
            <li>
              <Link>Best Seller</Link>
            </li>
            <li>
              <Link>Offers And Discount</Link>
            </li>
            <li>
              <Link>ePAY</Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="popupmenu" className="sidemenu">
        <div className="insider">
          <div className="close" onClick={closemenu}>
            &#x2715;
          </div>
          <img src="" alt="not loaded" />
          <span>Welcome In GRAVITY</span>
          <div className="section1">
            <h3>Most Sellin Today</h3>
            <ul>
              <li>
                <Link>By Category</Link>
              </li>
              <li>
                <Link>By Brand</Link>
              </li>
              <li>
                <Link>By Best Rating</Link>
              </li>
            </ul>
          </div>

          <div className="section2">
            <h3>Services</h3>
            <ul>
              <li>
                <Link> 0 Contac Service </Link>
              </li>
              <li>
                <Link>UPI Service</Link>
              </li>
              <li>
                <Link>24/7 Service</Link>
              </li>
            </ul>
          </div>
          <div className="section3">
            <h3>Your Order</h3>
            <ul>
              <li>
                <Link>Track Order</Link>
              </li>
              <li>
                <Link>Review Your Order</Link>
              </li>
              <li>
                <Link>Edit Order</Link>
              </li>
            </ul>
          </div>

          <div className="section4">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <Link>Complain</Link>
              </li>
              <p>Contact:9879868908</p>
              <p id="email">Email :shubhamsutariya@gmail.com </p>
            </ul>
          </div>
        </div>
      </div>

      {display && <Dropbox fun={setDisplay} closefun={closemenu}></Dropbox>}
    </>
  );
}

export default Navbar;
