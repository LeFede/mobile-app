import { StatusBar } from 'expo-status-bar';

//import Constants from 'expo-Constants'

import React from 'react';
import { Dimensions , SafeAreaView , StyleSheet , Platform } from 'react-native';

import HomeScreen from './app/screens/HomeScreen';


export default function App() {

  console.log(Dimensions.get('screen'))
  return (
    <SafeAreaView style={styles.appContainer}>
      <HomeScreen />

      <StatusBar style="light" />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    //paddingTop: Platform.OS === 'android' ? 24 : 0 
  }
})








