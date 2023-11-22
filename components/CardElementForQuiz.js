//import liraries
import { Card } from '@rneui/base';
import React, { Component, } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { isTablet } from '../helpers/DeviceInfo';
import { getColor } from '../helpers/CardColorProvider';
import { TapGestureHandler, RotationGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';

// create a component
const CardElementForQuiz = ({ number, symbol, name, category, mode, handleTapInQuiz }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    renderCardContent = () => {
        switch (mode) {
            case "Easy":
                return <>
                    <Text style={styles.number}>{number}</Text>
                    <Text style={styles.symbol}>{symbol}</Text>
                </>

            case "Medium":
                return <>
                    <Text style={styles.number}>{number}</Text>
                </>

            case "Hard":
                return <Text></Text>

            default:
                break;
        }
    }



    return (
        symbol != null ? <GestureHandlerRootView>
            <TapGestureHandler onBegan={() => handleTapInQuiz()}>
                <View style={[styles.container, {
                    width: windowWidth / 18 - 2,
                    backgroundColor: getColor(category),
                    marginHorizontal: 1,
                    height: isTablet() ? 45 : 35,
                }]}>
                    {/* actual card element */}

                    {renderCardContent()}









                </View>
            </TapGestureHandler>
        </GestureHandlerRootView> : <View style={{
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
export default CardElementForQuiz;
