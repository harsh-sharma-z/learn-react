import React, { useState } from "react";
import "./form.css";
const Form = (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [img, setImg] = useState();

  const formEventHandler = (event) => {
    event.preventDefault();
    props.addProduct({name, price, img})


    setImg("");
    setName("");
    setPrice(0);
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const imgChangeHandler = (e) => {
    setImg(e.target.value);
  };

  return (
    <div className="bahar">
      <div className="card">
        <form className="card2" onSubmit={formEventHandler}>
          <div>
            <label htmlFor="name">Product Name</label>
            <input
              onChange={nameChangeHandler}
              type="text"
              id="product"
              placeholder="name"
              value={name}
            ></input>
          </div>
          <div>
            <label htmlFor="price">Product Price</label>
            <input
              onChange={priceChangeHandler}
              type="number"
              id="price"
              placeholder="Price"
              value={price}
            ></input>
          </div>
          <div>
            <label htmlFor="img">Product Image</label>
            <input
              onChange={imgChangeHandler}
              type="text"
              id="image"
              placeholder="Enter img link"
              value={img}
            ></input>
          </div>

          <button className="but" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default Form;
