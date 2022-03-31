import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
/* import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'; */
import React, { useEffect, useState}  from 'react';
import Home from './src/Screens/home';
import * as Font from 'expo-font';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(()=>{
    if(!fontLoaded){
      loadFonts();
    }
  });

  const loadFonts = async () =>{
    await Font.loadAsync({
      'caveat-Medium': require('./assets/fonts/Caveat-Medium.ttf'),
    });
    setFontLoaded(true); 
  }

   if (!fontLoaded){
     return(<View/>)
   }

  return (
    <ScrollView style={{ height: '100%', width: '100%', flex: 1, flexDirection: 'column' }}>
      <StatusBar style="auto" backgroundColor='#17F5F9' />
      <Home style={styles.fontFamily}/>

      

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily:'caveat-Medium'
  }
});
