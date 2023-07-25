import React from 'react'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { selectSuccess } from '../Services/successFunctions'

const succesListHour = [
    "50/h",
    "100/h",
    "150/h",
    "200/h",
    "250/h",
    "300/h",
    "400/h",
    "500/h"
]
const succesListOneShot = [
    "30 d'un coup",
    "50 d'un coup",
    "70 d'un coup",
    "90 d'un coup",
    "100 d'un coup",
    "120 d'un coup",
    "150 d'un coup",
    "200 d'un coup",
]
const succesListDay = [
    "50/jour",
    "100/jour",
    "150/jour",
    "200/jour",
    "300/jour",
    "400/jour",
    "500/jour",
    "1000/jour",
]
const succesListWeek = [
    "300/semaine",
    "500/semaine",
    "1000/semaine",
    "1500/semaine",
    "2000/semaine",
    "2500/semaine",
    "3000/semaine",
    "5000/semaine",
]
const succesList = [...succesListDay, ...succesListHour, ...succesListOneShot, ...succesListWeek]
console.log('succesList');
console.log(succesList)

const Succes = () => {
    const renderGridItem = ({ item }) => (
        <Pressable
            onPress={() => selectSuccess(item)}
            style={styles.gridItem}>
            <Text style={{
                fontSize: 20,
                textAlign: "center",
                fontWeight: "600",
            }}>{item}</Text>
        </Pressable>
    );

    return (
        <View>

            <FlatList
                style={styles.gridContainer}
                data={succesList}
                renderItem={renderGridItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3} // Définir le nombre de colonnes ici
            />
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        // No need for flexDirection and flexWrap properties
        marginHorizontal: 20,
    },
    gridItem: {
        flex: 1, // Each item takes equal space within the column
        margin: 5,
        backgroundColor: 'lightgrey',
        height: 70,
        borderRadius: 5,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "30%",
    },
});

export default Succes;


