//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TouchableHighlight, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import CardElement from './CardElement';
import { isTablet } from '../helpers/DeviceInfo';
import { useEffect, useState } from 'react';
import { getColor } from '../helpers/CardColorProvider';
import { Icon } from '@rneui/base';

// create a component
const Table = ({ elements }) => {
    const [modalVisible, setmodalVisible] = useState(false)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedItem, setSelectedItem] = useState(null)
    useEffect(() => {
        console.log(isTablet());
    }, [])

    handleTap = (item) => {
        setSelectedItem(item)
        setmodalVisible(true);
    }
    return (
        <View style={[styles.container]}>
            <FlatList
                horizontal={false}
                numColumns={18}
                data={elements}
                renderItem={({ item }) => <CardElement {...item} handleTap={() => handleTap(item)} />}

            />

            {modalVisible === true && <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{
                    marginTop: windowHeight * 0.12,
                    width: windowWidth * 0.9, height: windowHeight * 0.75,
                    backgroundColor: getColor(selectedItem.category), alignSelf: "center",
                    borderRadius: 22,

                }}>

                    {/* Symbol name wrapper */}
                    <View style={[styles.symbolNameWrapper, {
                        backgroundColor: getColor(selectedItem.category),
                        width: isTablet() ? 160 : 140,
                        height: isTablet() ? 160 : 140,
                        borderRadius: isTablet() ? 80 : 70,
                        marginTop: isTablet() ? -70 : -70,

                    }]}>
                        <Text style={styles.selectedSymbol}>{selectedItem.symbol}</Text>
                        <Text style={styles.selectedName}>{selectedItem.name}</Text>
                    </View>

                    {/* Number */}
                    <View style={[styles.selectedNumberWrapper, {
                        width: isTablet() ? 80 : 70,
                        height: isTablet() ? 80 : 70,
                        borderRadius: isTablet() ? 40 : 35,
                    }]}><Text style={styles.selectedNumber}>{selectedItem.number}</Text></View>

                    {/* Category */}
                    <Text style={styles.selectedCategory}>{selectedItem.category}</Text>

                    {/* Close button */}
                    <View>
                        <Pressable
                            style={[styles.closeButton, { marginTop: isTablet() ? -200 : -180, }]}
                            onPress={() => {
                                setmodalVisible(false);
                            }}>
                            <Icon name='close' size={50} color={"white"} />
                        </Pressable>
                    </View>
                </View>
            </Modal>}
        </View>


    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    closeButton: {
        alignSelf: "flex-end",
        marginRight: -10,
        backgroundColor: "red",
        borderRadius: 55,
    },

    symbolNameWrapper: {

        borderColor: "white",
        borderWidth: 3,
        zIndex: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -15,
    },

    selectedSymbol: {
        fontSize: 40,
        fontWeight: "900",

    },

    selectedName: {
        fontSize: 20,
    },

    selectedNumberWrapper: {
        borderColor: "white",
        borderWidth: 3,
        zIndex: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 90,
        marginTop: -45,


    },

    selectedNumber: {
        color: "white", fontSize: 30, fontWeight: 900,
    },

    selectedCategory: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,

    }
});

//make this component available to the app
export default Table;
