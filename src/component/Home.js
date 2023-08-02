import React from "react";
import Button from 'react-bootstrap/Button';
function Home(props) {
  console.warn("home",props)
  return (
    <div>
          
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
            <Button  onClick={()=>props.addToCartHandler({price: 2500,name: 'iphone 14 pro max'})}>Add to cart</Button>
            
            <Button  onClick={()=>props.removeToCartHandler({price: 2500,name: 'iphone 14 pro max'})}>Remove to cart</Button>
            

        </div>
      </div>
    </div>
  );
}

export default Home;
