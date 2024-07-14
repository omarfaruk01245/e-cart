import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import Product from "./componets/Product";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProductDetail from "./componets/ProductDetail";
import SearchItem from "./componets/SearchItem";
import Cart from './componets/Cart';
import { items } from "./componets/Data";

const App = () => {
  const [data, setData]= useState([...items]);
  return (
    <>
      <Router>
        <Navbar  setData={setData}/>
        <Routes>
          <Route  path="/" element ={<Product items = {data}/>}/>
          <Route  path="/product/:id" element ={<ProductDetail/>}/>
          <Route  path="/search/:term" element ={<SearchItem/>}/>
          <Route  path="/cart" element ={<Cart/>}/>


        </Routes>
      </Router>

      
    </>
  );
};

export default App;
