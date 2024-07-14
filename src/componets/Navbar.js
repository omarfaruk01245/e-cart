import React from "react";
import { Link } from "react-router-dom";
import { items } from "./Data";

const Navbar = ({ setData }) => {
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);

    // console.log(element)

    setData(element);
  };

  const filterPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  return (
    <div>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-cart
          </Link>
          <div className="search-bar">
            <input type="text" placeholder="search Product" />
          </div>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>
      </header>
      <div className="nav-bar-wrapper">
        <div>filter by {"->"}</div>
        <div onClick={() => setData(items)} className="item">
          No filtter
        </div>

        <div onClick={() => filterByCategory("mobiles")} className="item">
          Mobile
        </div>
        <div onClick={() => filterByCategory("laptops")} className="item">
          Laptop
        </div>

        <div onClick={() => filterByCategory("tablets")} className="item">
          Tablet
        </div>

        <div onClick={() => filterPrice(29999)} className="item">
          {" "}
          {">="}29999
        </div>
        <div onClick={() => filterPrice(49999)} className="item">
          49999
        </div>
        <div onClick={() => filterPrice(69999)} className="item">
          69999
        </div>
        <div onClick={() => filterPrice(89999)} className="item">
          89999
        </div>
      </div>
    </div>
  );
};

export default Navbar;
