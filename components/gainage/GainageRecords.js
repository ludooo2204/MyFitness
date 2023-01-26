import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { DataButton, GainageMainContainer } from './style';
import ReadFromDatabase from '../../Services/ReadFromDatabase';

const GainageRecords = ({ navigation }) => {
    const [longestSession, setLongestSession] = useState(null)

    useEffect(() => {
        ReadFromDatabase(data => {
            const maxDuration = Math.max(...data.map(e => e.duration))
            setLongestSession(data.find(e => e.duration == maxDuration))
        });
    }, [])

    return <GainageMainContainer>

        {longestSession && <Text>La session la plus longue date du {new Date(longestSession.date).toLocaleDateString()} et a duré {longestSession.duration} s ! </Text>}


    </GainageMainContainer>;
};

export default GainageRecords;
