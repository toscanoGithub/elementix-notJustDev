//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, Image, Dimensions, TouchableOpacity, Pressable, Linking } from 'react-native';
import CardElement from './CardElement';
import { isTablet } from '../helpers/DeviceInfo';
import { useEffect, useState } from 'react';
import { getColor } from '../helpers/CardColorProvider';
import { Icon } from '@rneui/base';
import TableBuilder from '../helpers/TableBuilder';

// create a component
const Table = ({ elements }) => {
    const [modalVisible, setmodalVisible] = useState(true)
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedItem, setSelectedItem] = useState(null)
    useEffect(() => {
        console.log(isTablet());
    }, [])

    handleTap = (item) => {


        setSelectedItem(item)
        setmodalVisible(true);



        // alert(item.name);
    }


    return (
        <View style={[styles.container]}>

            <Image style={{ aspectRatio: 1 }} width={40} source={require("../images/image.png")} />
            <FlatList
                style={{ marginTop: -60 }}
                horizontal={false}
                numColumns={18}
                data={elements}
                renderItem={({ item }) => <CardElement {...item} handleTap={() => handleTap(item)} />}

            />

            {selectedItem && <Modal
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
                    borderWidth: 2,
                    borderColor: "#cccccc",
                    borderBottomStartRadius: 22,
                    borderBottomEndRadius: 22,



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

                    {/* Summary */}
                    <View style={styles.selectedSummaryWrapper}>
                        <Text style={[styles.selectedSummary,]}>{selectedItem.summary.substring(0, 100)} <Text onPress={() => {
                            const baseUrl = "https://en.wikipedia.org/wiki/"
                            Linking.openURL(`${baseUrl}${selectedItem.name}`)
                        }} style={{ color: "red" }}>See more...</Text></Text>
                    </View>

                    {/* Characteristics */}
                    <View style={styles.characteristicsWrapper}>
                        <Text style={styles.characteristicsTitle}>Characteristics</Text>

                        <View style={styles.characteristicsTable}>
                            <TableBuilder selectedItem={selectedItem} />
                        </View>
                    </View>




                    {/* Close button */}
                    <View>
                        <Pressable
                            style={[styles.closeButton, { top: -windowHeight * 0.75 + 25 }]}
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
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },

    closeButton: {
        alignSelf: "flex-end",
        right: -10,
        top: 10,
        backgroundColor: "red",
        borderRadius: 55,


    },

    symbolNameWrapper: {

        borderColor: "white",
        borderWidth: 4,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: -15,
    },

    selectedSymbol: {
        fontSize: 40,
        fontWeight: "bold",

    },

    selectedName: {
        fontSize: 20,
    },

    selectedNumberWrapper: {
        borderColor: "white",
        borderWidth: 4,
        backgroundColor: "#3D81AE",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 90,
        marginTop: -45,


    },

    selectedNumber: {
        color: "white", fontSize: 30, fontWeight: "bold",
    },

    selectedCategory: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        marginTop: 30,

    },

    selectedSummaryWrapper: {
        marginVertical: 30,
        paddingHorizontal: 10,



    },
    selectedSummary: {
        color: "#111111",
        fontSize: 18,

    },


    characteristicsWrapper: {

        flex: 1,

    },
    characteristicsTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#3D81AE",
        marginLeft: 10,

    },

    characteristicsTable: {
        width: "100%",
        backgroundColor: "transparent",
        marginTop: -20,
        height: "100%",
        zIndex: -1,






    }
});

//make this component available to the app
export default Table;
