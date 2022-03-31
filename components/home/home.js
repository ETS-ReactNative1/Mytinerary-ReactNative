
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
/* import Navbar from '../navbar/navbar'; */
import Carr from '../carrousel/carrousel';
import React from 'react'
import Hero from '../imagebackground/imageBackground';
import ButonGit from '../imagebackground/buton';
import Footer from '../carrousel/footer';


function Home(){
  return(
    <ScrollView>
      
      {/* <Navbar/> */}
      <Hero />
      <ButonGit/>
      <Carr/>
      <Footer/>
    </ScrollView>
  )
}



export default Home