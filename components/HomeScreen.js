import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, { useEffect } from 'react';
import initDatabase from '../Services/initDatabase';
const HomeScreen = ({ navigation }) => {
    useEffect(() => { initDatabase() }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: "black" }}>
            <Text
                style={{ fontSize: 50, marginTop: 150 }}

            >myFitness</Text>
            <View
                style={styles.buttonContainer}
            >
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Gainage')}
                >
                    <Text
                        style={styles.textButton}

                    >Gainage</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    title="Séance de squat"
                    onPress={() => navigation.navigate('Squat')}
                >
                    <Text
                        style={styles.textButton}

                    >Squat</Text>

                </Pressable>

                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate('Pump')}
                >
                    <Text
                        style={styles.textButton}

                    >Pompes</Text>

                </Pressable>
            </View>
            <Pressable
                style={styles.buttonPoids}
                onPress={() => navigation.navigate('Poids')}
            >
                <Text
                    style={styles.textButton}

                >Suivi du poids</Text>

            </Pressable>
            <Pressable
                style={styles.buttonPoids}
                onPress={() => navigation.navigate('Succès')}
            >
                <Text
                    style={styles.textButton}

                >Succès</Text>

            </Pressable>
        </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({
    buttonContainer: {
        // marginTop: 32,
        paddingHorizontal: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
    },
    button: {
        padding: 10,
        backgroundColor: "rgb(95, 0, 255)",
        margin: 10,
        borderRadius: 5,
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPoids: {
        // padding: 10,
        backgroundColor: "rgb(55, 60, 255)",
        margin: 10,
        borderRadius: 5,
        width: "80%",
        height: 50,
        marginBottom: 50,
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontSize: 25,
        fontWeight: "700",
        color: "rgb(203, 250, 255)"
    }
})