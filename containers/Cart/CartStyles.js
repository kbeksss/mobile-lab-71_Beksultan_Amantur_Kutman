import {StyleSheet} from "react-native";

const CartStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
    },
    title: {
        fontSize: 30,
    },
    btnCancel: {
        marginTop: 30,
    },
    cartDishes: {
        flex: 2,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    dish: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dishInfo: {
        fontSize: 23,
    },
    finalWrapper: {
        flex: 1,
    },
    finalText: {
        textAlign: 'center',
        fontSize: 30,
    }
});

export default CartStyles;
