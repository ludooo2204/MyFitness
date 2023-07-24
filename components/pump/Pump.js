import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ReadPumpFromDatabase } from '../../Services/ReadFromDatabase'
import { DataButton } from '../gainage/style'
import PumpCounter from './PumpCounter'

const Pump = ({ navigation }) => {
    useEffect(() => ReadPumpFromDatabase(data => { console.log("pompes Data =", data) }), [])
    return (
        <View style={styles.squatContainer}>
            <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('PumpData')}><Text>DATA</Text></DataButton>
            <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('PumpRecords')}><Text>RECORDS</Text></DataButton>
            <PumpCounter />
        </View>
    )
}

export default Pump
const styles = StyleSheet.create({
    squatContainer: {
        display: "flex",
        flex: 1,
    }
})