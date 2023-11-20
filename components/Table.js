//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CardElement from './CardElement';

// create a component
const Table = ({ elements }) => {
    return (
        <View style={[styles.container]}>
            <FlatList
                horizontal={false}
                numColumns={18}
                data={elements}
                renderItem={({ item }) => <CardElement {...item} />}

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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Table;
