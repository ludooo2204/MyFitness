import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import { ReadPoidsFromDatabase } from '../../Services/ReadFromDatabase';
import { GainageSessionContainer, GainageSessionText } from '../gainage/style';
import { BarChart, LineChart } from 'react-native-charts-wrapper';
import { deleteSpecificElementPoidsSquat } from '../../Services/deleteSpecificElementTable';
const PoidsData = ({ navigation }) => {
    const [data, setData] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null);

    useEffect(() => {
        ReadPoidsFromDatabase(e => {
            setData(e)
        });
    }, [])
    let dataForGraph2;

    if (data) {
        console.log('data');
        console.log(data)
        dataForGraph2 = data.map(d => { return { x: new Date(d.date).getTime() - new Date(data[0].date).getTime(), y: d.count } })

        console.log('dataForGraph2');
        console.log(dataForGraph2)


    }
    const handlePressData = (element) => {
        console.log('element');
        console.log(element)
        setModalVisible(true)
        setSelectedSession(element)

    }
    const confirmDelete = () => {
        console.log('selectedSession');
        console.log(selectedSession)
        setModalVisible(false)
        deleteSpecificElementPoidsSquat(selectedSession)
        ReadPoidsFromDatabase(e => {
            setData(e)
        });
    }
    const handleCloseModal = () => {
        setModalVisible(!modalVisible)
    };
    if (selectedSession) {
        console.log(' selectedSession');
        console.log(selectedSession)
    }
    return (<View style={{ flex: 1 }}>
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
                    <Text style={styles.modalText}>Es-tu sur de supprimer ce poids du {selectedSession ? new Date(selectedSession.date).toLocaleDateString() : null} ?</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={confirmDelete}>
                        <Text style={styles.textStyle}>oui</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={handleCloseModal}>
                        <Text style={styles.textStyle}>non</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <View style={{ flex: 1 }}><Text>graph</Text>
            {data && data.length > 0 && <LineChart style={styles.chart}

                yAxis={{ axisMaximum: 10 }}
                onSelect={e => {

                    console.log((e.nativeEvent.data))
                    console.log(new Date(e.nativeEvent.data.x))
                }}
                xAxis={{
                    drawLabels: true,
                    position: 'BOTTOM',
                    axisMaximum: dataForGraph2[dataForGraph2.length - 1].x + 60000,
                    axisMinimum: dataForGraph2[0].x - 60000,
                    valueFormatter: 'date',
                    valueFormatterPattern: 'YY-MM-dd hh:mm',
                    // since: dataForGraph2[0].x - 10000,
                    timeUnit: 'MILLISECONDS',
                }}

                data={{
                    dataSets: [{
                        label: "demo", values: dataForGraph2, config: {
                            lineWidth: 5,
                            drawCircles: false,
                            drawCubicIntensity: 0.3,
                            drawCubic: true,
                            drawHighlightIndicators: false,
                            color: 1,
                            drawFilled: true,
                            fillColor: 1,
                            fillAlpha: 90
                        }
                    }]
                }}
            />}</View>
        <ScrollView style={{ flex: 1 }}>{data && data.map((e, i) => {
            return <GainageSessionContainer style={{
                shadowColor: 'black',
                shadowOpacity: 0.26,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
                elevation: 4,
                backgroundColor: 'white'
            }} key={i} onPress={() => handlePressData(e)} >
                <GainageSessionText  >{e.count} squats   --  {new Date(e.date).toLocaleString('fr-FR')}</GainageSessionText>
            </GainageSessionContainer>
        })}
        </ScrollView></View>
    )
}
export default PoidsData;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        flex: 1
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





