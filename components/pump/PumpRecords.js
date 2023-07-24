import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { DataButton, GainageMainContainer } from '../gainage/style';
import { ReadPumpFromDatabase } from '../../Services/ReadFromDatabase';

const PumpRecords = ({ navigation }) => {
    const [maxSession, setMaxSession] = useState(null)

    useEffect(() => {
        ReadPumpFromDatabase(data => {
            const maxSquat = Math.max(...data.map(e => e.count))
            setMaxSession(data.find(e => e.count == maxSquat))
        });
    }, [])

    return <GainageMainContainer>

        {maxSession && <Text>Ton record de pompes date du  {new Date(maxSession.date).toLocaleDateString()} et tu as effectué {maxSession.count} pompes ! </Text>}


    </GainageMainContainer>;
};

export default PumpRecords;
