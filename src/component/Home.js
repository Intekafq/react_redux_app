import React from "react";

function Home() {
  return (
    <div>
          <div className="add-cart">
        <img src="https://static.vecteezy.com/system/resources/previews/000/351/328/original/vector-add-to-cart-icon.jpg" alt="" />
      </div>
      <h1>Home Component</h1>
    
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://global-uploads.webflow.com/62861fb0faf45bf95f09d5c2/62c675f03ae17301a9f2a12e_Ios-header-img.svg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
            <span>Iphone 14 Pro-max</span>
            <br />
            <span>Price : 2500 $</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
