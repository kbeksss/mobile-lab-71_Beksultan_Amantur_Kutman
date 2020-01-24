import {FETCH_DISHES_ERROR, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "./actionTypes";
import axiosTurtle from "../../axios-turtle";

const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
const fetchDishesSuccess = dishes => ({type: FETCH_DISHES_SUCCESS, dishes});
const fetchDishesError = () => ({type: FETCH_DISHES_ERROR});

export const fetchDishes = () => {
    return async dispatch => {
        dispatch(fetchDishesRequest());
        try{
            let response = await axiosTurtle.get('dishes.json');
            dispatch(fetchDishesSuccess(response.data));
        } catch (e){
            console.error('Error while getting the dishes');
            dispatch(fetchDishesError());
        }
    }
};
