import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatePrducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct)
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter(
      (p) => p.category === product.category
    );
    //  console.log('aaaaaaaaaaa',relatedProducts);
    setRelatePrducts(relatedProducts);
  }, [id, product.category]);

  return (
    <>
      <div className="container con " >
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div className="text-center" key={product.id}>
          <h1 className="card-title">{product.title}</h1>

          <p className="card-text">{product.description}</p>
          <button className="btn btn-primary mx-3">{product.price} </button>
          <button className="btn btn-warning">Add To Cart</button>
        </div>
      </div>
      
      <h1  className="text-center">Related Product </h1>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetails;
