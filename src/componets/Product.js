import React from "react";
import { Link } from "react-router-dom";

const Product = ({items}) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>

                  <Link to={`product/${product.id}`}
                  
                   style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                  <img 
                  src={product.imgSrc} className="card-img-top" alt=".."/>

                  </Link>

                    <div className="card-body">
                      <h1 className="card-title">{product.title}</h1>

                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">{product.price} </button>
                      <button className="btn btn-warning">Add To Cart</button>
                
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
