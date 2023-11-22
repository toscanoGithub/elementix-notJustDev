//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Linking } from 'react-native';
import { getColor } from '../helpers/CardColorProvider';
import TableBuilder from '../helpers/TableBuilder';
import TableBuilderCards from '../helpers/TableBuilderCards';

// create a component
const CardHorizontal = ({ number, name, symbol, category, summary, atomic_mass, density, electron_configuration, electronegativity_pauling, discovered_by }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        name && <View style={[styles.container,]}>
            <View style={[styles.card, {
                backgroundColor: "white",
                marginTop: number === 1 ? 30 : 50,
                width: windowWidth * 0.8,

            }]}>
                {/* top */}
                <View style={[styles.top, {
                    backgroundColor: getColor(category)
                }]}>
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>{name}</Text>
                    <Text style={{ color: "#111111", fontSize: 20 }}>{category}</Text>
                </View>

                {/* symbol | number in row */}
                <View style={{
                    flexDirection: "row", justifyContent: "space-around", width: 300,
                    marginTop: -30,
                    marginBottom: 30,

                }}>
                    <View style={{
                        width: 70, height: 70, borderRadius: 4,
                        backgroundColor: getColor(category), justifyContent: "center", alignItems: "center",
                        shadowColor: '#777777',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 1,
                        elevation: 3,
                    }}><Text style={{ fontWeight: "bold", fontSize: 30, color: "#464866" }}>{symbol}</Text></View>
                    <View style={{
                        width: 70, height: 70, borderRadius: 4,
                        backgroundColor: getColor(category), justifyContent: "center", alignItems: "center",
                        shadowColor: '#777777',
                        shadowOffset: { width: 1, height: 1 },
                        shadowOpacity: 0.8,
                        shadowRadius: 1,
                        elevation: 3,
                    }}><Text style={{ fontWeight: "bold", fontSize: 30, color: "#464866" }}>{number}</Text></View>
                </View>

                {/* white remaining views */}
                <View style={{ backgroundColor: "white", flex: 1 }}>
                    <View style={styles.selectedSummaryWrapper}>
                        <Text style={[styles.selectedSummary,]}>{summary.substring(0, 100)} <Text onPress={() => {
                            const baseUrl = "https://en.wikipedia.org/wiki/"
                            Linking.openURL(`${baseUrl}${name}`)
                        }} style={{ color: "red" }}>See more...</Text></Text>
                    </View>


                    {/* Characteristics */}
                    <View style={styles.characteristicsWrapper}>
                        <Text style={styles.characteristicsTitle}>Characteristics</Text>

                        {name && <View style={styles.characteristicsTable}>
                            <TableBuilderCards {...{ number, name, symbol, atomic_mass, density, electron_configuration, electronegativity_pauling, discovered_by }} />
                        </View>}
                    </View>

                </View>
            </View>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 30,


    },

    card: {
        // height: 700,
        // marginBottom: 100,
        alignItems: "center",
        borderRadius: 10,
        shadowColor: '#cccccc',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 13,
        overflow: "scroll",
        borderWidth: 1,
        borderColor: "#3D81AE50",
        paddingBottom: 20

    },

    top: {
        alignItems: "center",
        justifyContent: "flex-start",
        height: 100,
        width: "100%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,

    },

    selectedSummaryWrapper: {
        marginVertical: 10,
        paddingHorizontal: 15,

    },

    selectedSummary: {
        color: "#111111",
        fontSize: 14,

    },

    characteristicsWrapper: {
        maxWidth: "100%"
    },

    characteristicsTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#3D81AE",
        marginLeft: 15,


    },

    characteristicsTable: {
        // minWidth: "100%",
        backgroundColor: "transparent",
        marginTop: -20,
        // zIndex: -1,

    }
});

//make this component available to the app
export default CardHorizontal;
