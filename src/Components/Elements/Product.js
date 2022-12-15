import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../Stores/Cartslice"


function Product() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    // dispatch(fetchProducts());
    fetchProducts()
    
  }, []);

  const handleAdd = (pro) => {
    dispatch(add(pro));
  };

  return (
    <div className="products">
      <div className="conatiner">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 ">
              <div className="card " key={product.id}>
                <img className="img-fluid img-1" src={product.image} alt="" />
                <p>{product.title}</p>
                <b>{product.price} $</b>
                <button onClick={() => handleAdd(product)} className="btn mt-3">
                  Add to cart
                </button>
              </div>
            </div>
          ))};
        </div>
      </div>
    </div>
  );
}

export default Product;
