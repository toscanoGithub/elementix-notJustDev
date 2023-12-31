//import liraries
import { Divider } from '@rneui/base';
import { CardDivider } from '@rneui/base/dist/Card/Card.Divider';
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


// create a component
const TableBuilder = ({ selectedItem }) => {

    useEffect(() => {
        console.log(selectedItem.name || "empty");
    }, [])

    const dataTable = [
        { id: 1, title: "Atomic Number", value: selectedItem.number },
        { id: 2, title: "Atomic Mass", value: selectedItem.atomic_mass },
        { id: 3, title: "Density", value: selectedItem.density },
        { id: 4, title: "Configuration", value: selectedItem.electron_configuration },
        { id: 5, title: "Electronegativity", value: selectedItem.electronegativity_pauling },
        { id: 6, title: "Discovered by", value: selectedItem.discovered_by },


    ]
    const item = ({ item }) => (
        <View style={{
            flexDirection: 'row', flex: 1, backgroundColor: item.id % 2 === 0 ? "#FFFFFF" : "#E8E9EF",
            borderTopRightRadius: item.id === 1 ? 10 : 0,
            borderTopLeftRadius: item.id === 1 ? 10 : 0,
            borderBottomEndRadius: item.id === 6 ? 10 : 0,
            borderBottomStartRadius: item.id === 6 ? 10 : 0,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 12,


        }}>
            <View style={{ width: 200, paddingVertical: 10, justifyContent: "center", }}>
                <Text style={{ paddingLeft: 3, fontSize: 12, fontWeight: 'bold', textAlign: 'left' }}>{item.title}</Text>
            </View>

            <View style={{ width: 150, paddingVertical: 10, paddingRight: 50, justifyContent: "center", }}>
                <Text style={{ fontSize: 10, fontWeight: 'normal', textAlign: 'left', }}>{item.value}</Text>
            </View>



        </View>

    )
    return (

        <FlatList showsVerticalScrollIndicator={false} style={{
            marginHorizontal: 10,
            marginTop: 30,

        }} disableScrollViewPanResponder={false} horizontal={false} data={dataTable} renderItem={item} keyExtractor={item => item.id.toString()} />

    )
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
export default TableBuilder;
