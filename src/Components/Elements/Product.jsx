import React from "react";
import { useState, useEffect } from "react";
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // dispatch(fetchProducts());
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="product">
      <div className="conatiner">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 ">
              <div className="card " key={product.id}>
                <img className="img-fluid img-1" src={product.image} alt=""  />
                <p>{product.title}</p>
                <b>{product.price} $</b>
                {/* <button onClick={() => handleAdd(product)} className="btn">
                  Add to cart
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
