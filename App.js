import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
/* import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'; */
import React from 'react';
import Home from './components/home/home';

export default function App() {
  return (
    <ScrollView style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <StatusBar style="auto" backgroundColor='#ff6536' />
      <Home/>

      

    </ScrollView>
  );
}


