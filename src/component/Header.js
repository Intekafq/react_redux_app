import React from "react";

function Header(props) {
  console.warn("Header ".data);
  return (
    <div>
      <div className="add-cart">
      <span className="cart-count">{props.data.length}</span>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/351/328/original/vector-add-to-cart-icon.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
