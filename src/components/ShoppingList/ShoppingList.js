import React from "react";
import Product from "../Products/Product.js";
import "./ShoppingList.css";
import { useState } from "react";

import Form from "../form/Form.js";
const ShoppingList = () => {
  const initialProducts = [
    {
      name: "MackBook Pro",
      price: 1800,
      img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-large_2x.jpg",
    },
    {
      name: "iPhone 14 Pro Max",
      price: 1100,
      img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_640,f_auto",
    },
    {
      name: "Apple Watch Series 7",
      price: 700,
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    return setProducts([...initialProducts, product]);
  };

  return (
    <div>
    <div className="items">
      {products.map((product) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            img={product.img}
          />
        );
      })}

      </div>

      <Form addProduct={addProduct} />
    </div>
  );
};

export default ShoppingList;
