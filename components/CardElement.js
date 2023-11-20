//import liraries
import { Card } from '@rneui/base';
import React, { Component, } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { isTablet } from '../helpers/DeviceInfo';

// create a component
const CardElement = ({ name, number, symbol, category }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    getCardElementColor = () => {

        switch (category) {
            case "nonmetal":
                return "#FFFFCE"
            case "alkali metal":
                return "#FFCACC"
            case "alkaline earth metal":
                return "#D4D5FF"
            case "transition metal":
                return "#C6E1FF"
            case "metalloid":
                return "#E5F1CC"
            case "post-transition metal":
                return "#CDFFCD"
            case "lanthanide":
                return "#BBFFFF"
            case "actinide":
                return "#CDFFEE"
            case "noble gas":
                return "#FFE5C7"
            case "halogen":
                return "#FFFFCF"
            default:
                break;
        }

        return "transparent";
    }
    return (
        symbol != null ? <View style={[styles.container, {
            width: windowWidth / 18 - 2,
            backgroundColor: getCardElementColor(category),
            marginHorizontal: 1,
            height: isTablet() ? 45 : 35,
        }]}>
            {/* actual card element */}

            <Text style={styles.number}>{number}</Text>
            <Text style={styles.symbol}>{symbol}</Text>
            {isTablet() == true && <Text style={styles.name}>{name}</Text>}








        </View> : <View style={{
            borderWidth: 0,
            width: windowWidth / 18 - 2,
            marginHorizontal: 1
        }}></View>

    )

};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',

        gap: 3,
        marginVertical: 0.5,

        shadowColor: '#777777',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 3


    },

    number: { marginLeft: 2, color: "black", fontSize: 8, },
    symbol: { color: "#3D474C", alignSelf: "center", fontSize: 10, fontWeight: "bold" },
    name: {
        fontSize: 6,
        textAlign: "center",
        paddingBottom: 8,
        color: "#111",

    }
});

//make this component available to the app
export default CardElement;
