import {FETCH_DISHES_ERROR, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "../actionCreators/actionTypes";

const initialState = {
    dishes: {},
    loading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DISHES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
                dishes: action.dishes,
            };
        case FETCH_DISHES_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default dishesReducer;
