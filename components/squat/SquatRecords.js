import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { DataButton, GainageMainContainer } from '../gainage/style';
import { ReadSquatFromDatabase } from '../../Services/ReadFromDatabase';

const SquatRecords = ({ navigation }) => {
    const [maxSession, setMaxSession] = useState(null)

    useEffect(() => {
        ReadSquatFromDatabase(data => {
            const maxSquat = Math.max(...data.map(e => e.count))
            setMaxSession(data.find(e => e.count == maxSquat))
        });
    }, [])

    return <GainageMainContainer>

        {maxSession && <Text>Ton record de squats date du  {new Date(maxSession.date).toLocaleDateString()} et tu as effectué {maxSession.count} squats ! </Text>}


    </GainageMainContainer>;
};

export default SquatRecords;
