import {
    ADD_TO_CART,
    CART_INIT,
    POST_CART_SUCCESS,
    REMOVE_FROM_CART
} from "./actionTypes";
import axiosTurtle from "../../axios-turtle";

export const addToCart = dishId => ({type: ADD_TO_CART, dishId});
export const removeFromCart = dishId => ({type: REMOVE_FROM_CART, dishId});

const postCartSuccess = () => ({type: POST_CART_SUCCESS});

export const cartInit = () => ({type: CART_INIT});

export const postCart = cart => {
    return async dispatch => {
        try{
            await axiosTurtle.post('orders.json', cart);
            dispatch(postCartSuccess());
        } catch (e) {
            console.error('Error while sending the cart')
        }
    }
};
