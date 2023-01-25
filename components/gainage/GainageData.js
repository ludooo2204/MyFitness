import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import ReadFromDatabase from '../../Services/ReadFromDatabase';
import { GainageSessionContainer, GainageSessionText } from './style';

const GainageData = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        ReadFromDatabase(e => {
            setData(e)
        });
    }, [])
    return (
        <>{data && data.map((e, i) => {
            return <GainageSessionContainer style={{
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
                elevation: 4,
                backgroundColor: 'white'
            }} key={i}  >
                <GainageSessionText  >durée de {e.duration / 1000} s   --  {new Date(e.date).toLocaleString('fr-FR')}</GainageSessionText>
            </GainageSessionContainer>
        })}
        </>
    )
}
export default GainageData;