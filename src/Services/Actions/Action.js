import ADD_TO_CART from "../Contstants";

export const AddToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};


export const removeToCart = (data) => {
    return {
      type: REMOVE_TO_CART,
      data: data,
    };
  };