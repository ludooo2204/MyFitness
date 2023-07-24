/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import rootReducer from './reducers'

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Gainage from './components/gainage/Gainage';
import HomeScreen from './components/HomeScreen';
import Squat from './components/squat/Squat';
import SquatRecords from './components/squat/SquatRecords';
import SquatData from './components/squat/SquatData';
import GainageData from './components/gainage/GainageData';
import GainageRecords from './components/gainage/GainageRecords';
import Pump from './components/pump/Pump';
import PumpData from './components/pump/PumpData';
import PumpRecords from './components/pump/PumpRecords';
import Poids from './components/poids/Poids';
import PoidsData from './components/poids/PoidsData';


// const store = configureStore(
//   { reducer: rootReducer },
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )





const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle =
    isDarkMode ? styles.dark : styles.light
    ;
  return (
    <NavigationContainer>
      {/* <Provider   store={store}
       >  */}
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Gainage" component={Gainage} />
        <Stack.Screen name="GainageData" component={GainageData} />
        <Stack.Screen name="GainageRecords" component={GainageRecords} />
        <Stack.Screen name="Squat" component={Squat} />
        <Stack.Screen name="SquatData" component={SquatData} />
        <Stack.Screen name="SquatRecords" component={SquatRecords} />
        <Stack.Screen name="Pump" component={Pump} />
        <Stack.Screen name="PumpData" component={PumpData} />
        <Stack.Screen name="PumpRecords" component={PumpRecords} />
        <Stack.Screen name="Poids" component={Poids} />
        <Stack.Screen name="PoidsData" component={PoidsData} />
      </Stack.Navigator>
      {/* </Provider> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  dark: {
    backgroundColor: "black",
    color: "white"
  },

  light: {
    backgroundColor: "white",
    color: "black"
  },
  mainDark: {
    backgroundColor: "black",
    color: "white",
    flex: 1
  },
  mainLight: {
    backgroundColor: "white",
    color: "black",
    flex: 1
  },
});

export default App;


