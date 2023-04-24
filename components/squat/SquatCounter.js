import React, { Component, useState } from 'react'
import { Pressable, StyleSheet, Text, Modal, TextInput, View } from 'react-native'
import { WriteSquatToDatabase } from '../../Services/WriteToDatabase';
import { button } from '../gainage/style';

const SquatCounter = () => {
    const [number, onChangeNumber] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const handleValidate = () => {
        setModalVisible(true)

        WriteSquatToDatabase(number)

    };
    const handleCloseModal = () => {
        onChangeNumber(0)
        setModalVisible(!modalVisible)
    };
    console.log("coucou")
    return (
        <View
            style={styles.view}
        >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Bravo, tes {number} squats ont bien été enregistrés !</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleCloseModal}>
                            <Text style={styles.textStyle}>fermer</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Text style={styles.text}> Combien de squats pour cette séance ? </Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
                keyboardType="numeric"
                autoFocus
            />
            <Pressable style={button} onPress={handleValidate} >
                <Text>Valider la session ?</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 100,
        fontSize: 20,
        textAlign: "center",
    },
    text: {
        fontSize: 20,
    },
    view: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default SquatCounter
