import React from 'react';
import {View, Button, Text, ScrollView} from 'react-native';
import CartStyles from "./CartStyles";
const DELIVERY = 150;
const Cart = props => {
    let total = 0;
    return (
        <View style={CartStyles.container}>
            <Text style={CartStyles.title}> Your Order: </Text>
            <ScrollView style={CartStyles.cartDishes}>
                {props.cart && Object.keys(props.cart).map(dish => {
                    total += props.dishes[dish].price * props.cart[dish];
                    return (<View key={dish} style={CartStyles.dish} >
                        <Text style={CartStyles.dishInfo} >{props.dishes[dish].title} x {props.cart[dish]}</Text>
                        <Text style={CartStyles.dishInfo}>{props.dishes[dish].price * props.cart[dish]}</Text>
                        <Button title='delete' onPress={() => props.removeDish(dish)}/>
                    </View>)
                })}
            </ScrollView>
            <View style={CartStyles.finalWrapper}>
                <Text style={CartStyles.finalText}>Delivery: {DELIVERY}</Text>
                <Text style={CartStyles.finalText}>Total: {total + DELIVERY}</Text>
            </View>
            <Button
                title="Order"
                onPress={props.onOrder}
            />
            <Button
                color='red'
                style={CartStyles.btnCancel}
                title="Cancel"
                onPress={props.onClose}
            />
        </View>
    );
};

export default Cart;
