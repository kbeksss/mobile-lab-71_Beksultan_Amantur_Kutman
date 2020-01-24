import {ADD_TO_CART, CART_INIT, REMOVE_FROM_CART} from "../actionCreators/actionTypes";

const initialState = {
    cart: {},
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if(state.cart[action.dishId]){
                return {
                    ...state,
                    cart: {...state.cart, [action.dishId]: state.cart[action.dishId] + 1}
                };
            } else{
                return {
                    ...state,
                    cart: {...state.cart, [action.dishId]: 1}
                };
            }
        case REMOVE_FROM_CART:
            if(state.cart[action.dishId] && state.cart[action.dishId] > 1){
                return {
                    ...state,
                    cart: {...state.cart, [action.dishId]: state.cart[action.dishId] - 1}
                };
            } else {
                let newCart = {...state.cart};
                delete newCart[action.dishId];
                return {
                    ...state,
                    cart: newCart
                };
            }
        case CART_INIT:
            return {
                ...state,
                cart: {}
            };
        default:
            return state;
    }
};

export default cartReducer;
