
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
/* import Navbar from '../navbar/navbar'; */
import Carr from '../carrousel/carrousel';
import React from 'react'
import Hero from '../imagebackground/imageBackground';
import ButonGit from '../imagebackground/buton';

function Home(){
  return(
    <ScrollView>
      
      {/* <Navbar/> */}
      <Hero />
      <ButonGit/>
      <Carr/>
    </ScrollView>
  )
}



export default Home