import {ADD_TO_CART,REMOVE_TO_CART} from "../Contstants";

export const AddToCart = (data) => {
  // console.warn("data",data)
  return {
    type: ADD_TO_CART,
    data: data,
  }
}


export const removeToCart = (data) => {
  // console.warn("acton",data)
    return {
      type: REMOVE_TO_CART,
      data: data,
    };
  };