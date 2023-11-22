//import liraries
import { CheckBox, } from '@rneui/base';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlightComponent, Pressable, TouchableOpacity } from 'react-native';
import TableForQuiz from './TableForQuiz';
import { TouchableHighlight } from 'react-native-gesture-handler';

// create a component
const QuizTab = ({ elements }) => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [selectedIndex, setIndex] = useState(0);
    const [score, setScore] = useState(0)
    const [lives, setLives] = useState(5)
    const [targetElement, setTargetElement] = useState(null)

    renderTableForGame = () => {

        switch (selectedIndex) {
            case 0:
                return <TableForQuiz elements={elements} mode="Easy" />
            case 1:
                return <TableForQuiz elements={elements} mode="Medium" />
            case 2:
                return <TableForQuiz elements={elements} mode="Hard" />

            default:
                return <TableForQuiz elements={elements} mode="Easy" />
        }
    }


    handleStartQuiz = () => {
        let pickedElement;
        do {
            pickedElement = elements[Math.floor(Math.random() * elements.length)];
            console.log(pickedElement["name"]);
            setTargetElement(pickedElement["name"])
        } while (pickedElement["name"] === undefined);
    }
    return (
        <View style={styles.container}>
            {/* Hud view */}
            <View style={{
                height: windowHeight * 0.15,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between", alignItems: "center",
                backgroundColor: "#3D81AE05",

            }}>
                {/* score and lives wrapper */}
                <View style={styles.scoresNlives}>
                    <Text>Lives: {lives}</Text>
                    <Text>Score: {score}</Text>
                </View>

                {/* radio buttons wrapper */}
                <View style={{
                    backgroundColor: "transparent", justifyContent: "center", alignItems: "flex-start",

                    paddingRight: 10, marginTop: 0, rowGap: 10,
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

            {
                targetElement ?
                    <View View style={{
                        justifyContent: "center", alignItems: "flex-start", rowGap: 0,
                        marginVertical: 30,
                    }}>
                        <Text style={{ fontSize: 16, }}>Find</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 30, marginTop: -5 }}>{targetElement}</Text>

                    </View> : <TouchableOpacity

                        onPress={handleStartQuiz}
                        style={{
                            paddingHorizontal: 10, paddingVertical: 5,
                            backgroundColor: "#3D81AE", width: 150, borderRadius: 20,
                        }}><Text style={{
                            fontSize: 30, color: "white", fontWeight: "bold", textAlign: "center", letterSpacing: 1

                        }}>Start</Text></TouchableOpacity>
            }

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
        // backgroundColor: "blue",
        width: "100%"
    }
});

//make this component available to the app
export default QuizTab;
