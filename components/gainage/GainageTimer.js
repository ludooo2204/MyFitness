import React, { useEffect, useRef, useState } from 'react';
import { Button, Pressable, Modal, Text, View, Dimensions, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import deleteFromDatabase from '../../Services/deleteTable';
import ReadFromDatabase from '../../Services/ReadFromDatabase';
import WriteToDatabase from '../../Services/WriteToDatabase';
import { css } from '@emotion/native'

import { button, Container, CustomButton, Description, GainageContainer, GainageTimerContainer, PressableContainer, StartTimerButton, test, TimerButton, TimerText } from './style';
console.log('test');
console.log(test)
const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
const GainageTimer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const counter = useSelector(state => state.counter)
  const gainage = useSelector(state => state.gainage)

  const dispatch = useDispatch();

  const user = { name: "Rei" }
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime(new Date() - startTime);
      }, 100);
    } else if (!isRunning && elapsedTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, elapsedTime]);

  const handleStartPress = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const handleStopPress = () => {
    setIsRunning(false);
    const tes = new SeanceGainage(elapsedTime);
  };
  const addStore = (time) => {
    dispatch({ type: 'ADD_GAINAGE_SESSION', payload: time });

  };

  const handleResetPress = () => {
    setStartTime(null);
    setElapsedTime(0);
  };
  const handleValidate = () => {
    WriteToDatabase(elapsedTime)
    setStartTime(null);
    setElapsedTime(0);
  };
  const handleDeleteDatabase = () => {
    deleteFromDatabase()
  };
  return (

    <GainageTimerContainer
      height={height / 2}
    >
      {/* <Description style={{ fontSize: 45, fontWeight: 'bold' }}>
        Emotion Primitives
      </Description> */}
      {/* <View style={test}><Text>TEST</Text></View> */}
      {/* <Button title="add to store" onPress={() => addStore(elapsedTime)} />
      <Button title="lire data" onPress={ReadFromDatabase} />
      <Button title="effacer datas" onPress={handleDeleteDatabase} />
      <Button title="increment" onPress={() => dispatch(allActions.counterActions.increment())} /> */}

      <TimerText testID='timer'>{elapsedTime != 0 ? `${(Math.round(elapsedTime / 100) / 10).toFixed(1)} s` : ""}</TimerText>
      {/* <Text>{counter}</Text> */}
      {!isRunning && elapsedTime == 0 && <TimerButton

        diametre={width / 4}
        onPress={handleStartPress}
        color={'#b0dde8'}
      ><Text>Start</Text></TimerButton>}

      {isRunning &&
        <TimerButton
          diametre={width / 4}
          onPress={handleStopPress}
          color={'#eb4f44'}
        ><Text>stop</Text></TimerButton>

      }
      {
        !isRunning && elapsedTime !== 0 && (
          <PressableContainer>
            <Pressable style={button} onPress={handleResetPress} >
              <Text>Reset</Text>
            </Pressable>
            <Pressable style={button} onPress={handleValidate} >
              <Text>Valider la session ?</Text>
            </Pressable>
          </PressableContainer>
        )
      }
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button onPress={() => setModalVisible(true)} title="press" />

    </GainageTimerContainer >
  );
};

class SeanceGainage {
  constructor(duration) {
    this.date = new Date();
    this.duration = duration;
  }
}

const styles = StyleSheet.create({
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
    borderRadius: 20,
    padding: 10,
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
    textAlign: 'center',
  },
});


export default GainageTimer;

