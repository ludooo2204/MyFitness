import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ReadSquatFromDatabase } from '../../Services/ReadFromDatabase'
import { DataButton } from '../gainage/style'
import SquatCounter from './SquatCounter'

const Squat = ({ navigation }) => {
    useEffect(() => ReadSquatFromDatabase(data => console.log(data)), [])
    return (
        <View style={styles.squatContainer}>
            <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('SquatData')}><Text>DATA</Text></DataButton>
            <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('SquatRecords')}><Text>RECORDS</Text></DataButton>
            <SquatCounter />
        </View>
    )
}

export default Squat
const styles = StyleSheet.create({
    squatContainer: {
        display: "flex",
        flex: 1,
    }
})