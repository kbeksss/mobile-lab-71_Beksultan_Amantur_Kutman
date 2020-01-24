import {StyleSheet} from "react-native";

const DishesStyles = StyleSheet.create({
    logo: {
        marginTop: 13,
        color: '#3ad8ff',
        fontSize: 25,
        fontWeight: 'bold',
        borderBottomWidth: 2,
    },
    dishesWrapper: {
        marginTop: 20,
        width: '90%',
    },
    dish: {
        marginBottom: 12,
        borderRadius: 3,
        borderColor: '#3ad8ff',
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flatList: {
        height: '70%',
    },
    bottomBlock: {
        flexDirection: 'row',
        marginTop: 'auto',
        paddingBottom: 20,
        borderTopWidth: 2,
        borderColor: '#3ad8ff',
    },
    bottomText: {
        fontSize: 25,
        marginRight: 10,
    },
    btn: {
    }
});
export default DishesStyles;
