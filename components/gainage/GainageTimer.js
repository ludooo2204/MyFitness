import React, { useEffect, useRef, useState } from 'react';
import { Button, Pressable, Modal, Text, View, Dimensions, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../../actions';
import deleteFromDatabase from '../../Services/deleteTable';
import { WriteGainageToDatabase } from '../../Services/WriteToDatabase';
import { css } from '@emotion/native'

import { button, Container, CustomButton, Description, GainageContainer, GainageTimerContainer, PressableContainer, StartTimerButton, test, TimerButton, TimerText } from './style';
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
    // handleDeleteDatabase()
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
    setModalVisible(true)
    WriteGainageToDatabase(elapsedTime)

  };
  const handleDeleteDatabase = () => {
    deleteFromDatabase()
  };
  const handleCloseModal = () => {
    setStartTime(null);
    setElapsedTime(0);
    setModalVisible(!modalVisible)
  };
  return (

    <GainageTimerContainer
      height={height / 2}
    >


      <TimerText testID='timer'>{elapsedTime != 0 ? `${(Math.round(elapsedTime / 100) / 10).toFixed(1)} s` : ""}</TimerText>
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
            <Text style={styles.modalText}>Bravo, tu as tenu {(Math.round(elapsedTime / 100) / 10).toFixed(1)} s !</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleCloseModal}>
              <Text style={styles.textStyle}>ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

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


export default GainageTimer;

