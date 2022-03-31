
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
/* import Navbar from '../navbar/navbar'; */
import Carr from '../components/carrousel';
import React from 'react'
import Hero from '../components/imageBackground';
import ButonGit from '../components/buton';
import Footer from '../components/footer';


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