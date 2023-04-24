import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { DataButton, GainageMainContainer } from './style';
import { ReadGainageFromDatabase } from '../../Services/ReadFromDatabase';

const GainageRecords = ({ navigation }) => {
    const [longestSession, setLongestSession] = useState(null)

    useEffect(() => {
        ReadGainageFromDatabase(data => {
            const maxDuration = Math.max(...data.map(e => e.duration))
            setLongestSession(data.find(e => e.duration == maxDuration))
        });
    }, [])

    return <GainageMainContainer>

        {longestSession && <Text>La session la plus longue date du {new Date(longestSession.date).toLocaleDateString()} et a duré {longestSession.duration / 1000} s ! </Text>}


    </GainageMainContainer>;
};

export default GainageRecords;
