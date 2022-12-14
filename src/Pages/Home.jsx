import React from "react";
import Product from "../Components/Elements/Product";

function Home() {
  return (
    <div className="home">
    <div className="container text-center mt-5">
      <h1>Welcome to Redux Store</h1>
      <div>
        <h3>Products</h3>
        <Product/>
      </div>
    </div>
    </div>
  );
}

export default Home;
