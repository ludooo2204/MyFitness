import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ReadPoidsFromDatabase } from '../../Services/ReadFromDatabase'
import { DataButton } from '../gainage/style'
import PoidsCounter from './PoidsCounter'

const Poids = ({ navigation }) => {
    useEffect(() => ReadPoidsFromDatabase(data => { console.log("poids Data =", data) }), [])
    return (
        <View style={styles.squatContainer}>
            <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('PoidsData')}><Text>DATA</Text></DataButton>

            <PoidsCounter />
        </View>
    )
}

export default Poids
const styles = StyleSheet.create({
    squatContainer: {
        display: "flex",
        flex: 1,
    }
})