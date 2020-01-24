import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dishes from "./containers/Dishes/Dishes";
import dishesReducer from "./store/reducers/dishesReducer";

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import cartReducer from "./store/reducers/cartReducer";

const rootReducer = combineReducers({
    dishes: dishesReducer,
    cart: cartReducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Dishes/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
