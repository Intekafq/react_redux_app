import { ADD_TO_CART,REMOVE_TO_CART } from "../Contstants";

const initialState = {
    cardData: []
}

export default function cardItems(state=[], action){
    switch (action.type){
        case ADD_TO_CART:
            // console.warn("Action",action)
            return[
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_TO_CART:
            // console.warn("Action",action)
            state.pop();
            return[
                ...state,
                
            ]
     
            default:
                return state
    }
}