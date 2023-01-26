import React, { useEffect, useState } from 'react';
import GainageTimer from './GainageTimer';
import WriteToDatabase from '../../Services/WriteToDatabase'
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { DataButton, GainageMainContainer } from './style';

const Gainage = ({ navigation }) => {



  return <GainageMainContainer>

    <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('GainageData')}><Text>DATA</Text></DataButton>
    <DataButton color={'#b0dde8'} onPress={() => navigation.navigate('GainageRecords')}><Text>RECORDS</Text></DataButton>
    <GainageTimer />



  </GainageMainContainer>;
};

export default Gainage;
