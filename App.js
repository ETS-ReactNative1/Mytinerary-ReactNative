import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
/* import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'; */
import React, { useEffect, useState}  from 'react';
import Home from './src/Screens/home';

import { useFonts, Caveat_400Regular, Caveat_700Bold } from '@expo-google-fonts/caveat';


export default function App() {
    let [fontsLoaded, error] = useFonts({
      Caveat_400Regular,
      Caveat_700Bold
    })

    
    
  return (
    <ScrollView style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <StatusBar style="auto" backgroundColor='#17F5F9' />
      <Home style={styles.fontFamily}/>

      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily:'Caveat_400Regular'
  }
});
