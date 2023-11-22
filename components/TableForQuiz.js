//import liraries
import React, { Component, } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { getColor } from '../helpers/CardColorProvider';
import CardElementForQuiz from './CardElementForQuiz';

// create a component
const TableForQuiz = ({ elements, mode }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    handleTapInQuiz = (item) => {
        console.log("tapped table for quiz", item.name);
    }



    return (
        <View style={styles.container}>
            <FlatList
                horizontal={false}
                numColumns={18}
                data={elements}
                renderItem={({ item }) => <CardElementForQuiz mode={mode} {...item} handleTapInQuiz={() => handleTapInQuiz(item)} />}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

//make this component available to the app
export default TableForQuiz;
