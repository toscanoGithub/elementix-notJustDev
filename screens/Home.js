//import liraries
import React, { Component, useEffect, useState } from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import * as data from '../data/elements.json';
import Table from '../components/Table';
import Cards from '../components/Cards';
import QuizTab from '../components/Quiz';

// create a component
const Home = () => {
    const [index, setIndex] = useState(0)
    const [elements, setElements] = useState(null)
    useEffect(() => {

        setElements(data["elements"]);

    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <Text style={styles.title}>Periodic Table Of Elements</Text>
                <Tab
                    disableSwipe
                    width="100%"
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                        backgroundColor: '#D0D375',
                        height: 8,
                    }}
                    variant="default"
                >
                    <Tab.Item
                        title="Table"
                        titleStyle={{ fontSize: 20, color: "white" }}
                        icon={{ size: 20, name: 'grid', type: 'ionicon', color: 'white' }}
                    />
                    <Tab.Item
                        title="Cards"
                        titleStyle={{ fontSize: 20, color: "white" }}
                        icon={{ size: 20, name: 'card', type: 'ionicon', color: 'white' }}
                    />
                    <Tab.Item
                        title="Quiz"
                        titleStyle={{ fontSize: 20, color: "white" }}
                        icon={{ size: 20, name: 'find-in-page', type: 'MaterialIcons', color: 'white' }}
                    />
                </Tab>

                <TabView value={index} onChange={setIndex} animationType="spring">
                    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                        <Table elements={elements} />
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                        {elements && <Cards elements={elements} />}
                    </TabView.Item>
                    <TabView.Item style={{ backgroundColor: 'white', width: '100%' }}>
                        <QuizTab elements={elements} />
                    </TabView.Item>
                </TabView>
            </View>
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
    title: {
        color: "#D0D375",
        fontSize: 26,
        textAlign: "center",
        marginTop: 30,
        fontWeight: "bold",

    },
    appBar: {
        backgroundColor: "#3D81AE",
        paddingTop: 10,
    }
});

//make this component available to the app
export default Home;
