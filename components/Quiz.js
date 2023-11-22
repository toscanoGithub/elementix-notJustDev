//import liraries
import { CheckBox, } from '@rneui/base';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// create a component
const QuizTab = ({ elements }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedIndex, setIndex] = useState(0);
    const [score, setScore] = useState(0)
    const [lives, setLives] = useState(5)

    renderTableForGame = () => {
        switch (selectedIndex) {
            case 0:
                return <Text style={{ color: "white" }}>Easy mode</Text>
            case 1:
                return <Text style={{ color: "white" }}>Medium mode</Text>
            case 2:
                return <Text style={{ color: "white" }}>Hard mode</Text>

            default:
                return <Text style={{ color: "white" }}>Easy mode</Text>
        }
    }
    return (
        <View style={styles.container}>
            {/* Hud view */}
            <View style={{
                height: windowHeight * 0.10,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between", alignItems: "center"
            }}>
                {/* score and lives wrapper */}
                <View style={styles.scoresNlives}>
                    <Text>Lives: {lives}</Text>
                    <Text>Score: {score}</Text>
                </View>

                {/* radio buttons wrapper */}
                <View style={{
                    backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start",

                    paddingRight: 10, marginTop: 40, rowGap: 10,
                }}>

                    {/* label and radio EASY */}
                    <View style={{
                        flexDirection: "row", justifyContent: "flex-end", alignItems: "center",
                    }}>

                        <CheckBox
                            checkedColor='#3D81AE'
                            containerStyle={{ backgroundColor: "transparent", padding: 0, margin: 0, }}
                            checked={selectedIndex === 0}
                            onPress={() => setIndex(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Text style={{ margin: 0 }}>Easy</Text>
                    </View>

                    {/* label and radio MEDIUM */}
                    <View style={{
                        flexDirection: "row", justifyContent: "flex-end", alignItems: "center",
                    }}>

                        <CheckBox
                            checkedColor='#3D81AE'
                            containerStyle={{ backgroundColor: "transparent", padding: 0, margin: 0, }}
                            checked={selectedIndex === 1}
                            onPress={() => setIndex(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Text style={{ margin: 0 }}>Medium</Text>
                    </View>

                    {/* label and radio HARD */}
                    <View style={{
                        flexDirection: "row", justifyContent: "flex-start", alignItems: "center",
                    }}>

                        <CheckBox
                            checkedColor='#3D81AE'
                            containerStyle={{ backgroundColor: "transparent", padding: 0, margin: 0, }}
                            checked={selectedIndex === 2}
                            onPress={() => setIndex(2)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                        />
                        <Text style={{ margin: 0 }}>Hard</Text>
                    </View>
                </View>
            </View>

            {/* instructions view */}
            <View style={{ justifyContent: "center", alignItems: "flex-start", rowGap: 0 }}>
                <Text style={{ fontSize: 16, }}>Find</Text>
                <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -5 }}>Hydrogen</Text>
            </View>

            {/* Table view */}
            <View style={styles.tableView}>
                {renderTableForGame()}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    scoresNlives: {
        justifyContent: "space-between",
        flex: 1,
        padding: 5

    },


    tableView: {
        flex: 1,
        backgroundColor: "blue",
        width: "100%"
    }
});

//make this component available to the app
export default QuizTab;
