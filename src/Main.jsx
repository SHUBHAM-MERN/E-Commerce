import React from "react";
import Homeitoms from "./Homeitoms";
import home_product from "./home_product";
import Dropbox from "./Dropbox";

function Main() {
  return (
    <>
      <div className="product_info">
        {home_product.map(
          ({ id, product, img, price, rating, time, sales_end,product_link }) => {
            return (
              <Homeitoms
                id_={id}
                product_={product}
                img_={img}
                rating_={rating}
                price_={price}
                time_={time}
                end_time={sales_end} product_link_={product_link}
              ></Homeitoms>
            );
          }
        )}
      </div>
    </>
  );
}

export default Main;
