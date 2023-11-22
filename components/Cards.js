//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardElement from './CardElement';
import CardHorizontal from './CardHorizontal';

// create a component
const Cards = ({ elements }) => {
    const [items, setItems] = useState(elements)
    useEffect(() => {
        //   remove empty elements 

        elements.forEach((element, index) => {
            if (element["name"] !== undefined) {
                setItems(prev => [...prev, element])
            }
        });

    }, [])

    return (
        <View style={styles.container}>
            <FlatList data={items}

                renderItem={({ item }) => <CardHorizontal {...item} />}



            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default Cards;
