import React, {Fragment, useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator, Modal, Button} from "react-native";
import DishesStyles from "./DishesStyles";
import {connect} from "react-redux";
import {fetchDishes} from "../../store/actionCreators/dishesActions";
import {addToCart, cartInit, postCart, removeFromCart} from "../../store/actionCreators/cartActions";
import Cart from "../Cart/Cart";


function Item({ imgUrl, title, price, press }) {
    return (
        <TouchableOpacity onPress={press} style={DishesStyles.dish}>
            <Image
                style={{width: 50, height: 50}}
                source={{uri: imgUrl}}
            />
            <Text >{title}</Text>
            <Text >{price} KGS</Text>
        </TouchableOpacity>
    );
}
const Dishes = props => {
    const [modal, toggleModal] = useState(false);
    const sendCart = async () => {
        await props.postCart(props.cart);
        props.cartInit();
        toggleModal(false);
    };
    useEffect(() => {
        props.fetchDishes();
    }, []);

    return (
        <Fragment >
            <Text style={DishesStyles.logo}>Turtle Pizza</Text>
            <View style={DishesStyles.dishesWrapper}>
                {!props.loading ? (
                    <FlatList
                        style={DishesStyles.flatList}
                        data={Object.keys(props.dishes)}
                        renderItem={({ item }) => (
                            <Item
                                press={() => props.addToCart(item)}
                                style={DishesStyles.item}
                                title={props.dishes[item].title}
                                price={props.dishes[item].price}
                                imgUrl={props.dishes[item].img}
                            />
                        )}
                        keyExtractor={item => item}
                    />
                ) : <ActivityIndicator size="large" color="#3ad8ff" />}
            </View>
            <View style={DishesStyles.bottomBlock}>
                <Text style={DishesStyles.bottomText}>Order Total</Text>
                <Button
                    style={DishesStyles.btn}
                    title="Checkout"
                    onPress={() => toggleModal(true)}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <Cart
                    onClose={() => toggleModal(false)}
                    onOrder={sendCart}  cart={props.cart}
                    removeDish={props.removeFromCart}
                    dishes={props.dishes}
                />
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
    loading: state.dishes.loading,
    cart: state.cart.cart,
});
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    addToCart: dishId => dispatch(addToCart(dishId)),
    postCart: cart => dispatch(postCart(cart)),
    cartInit: () => dispatch(cartInit()),
    removeFromCart: dishId => dispatch(removeFromCart(dishId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
