
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
/* import Navbar from '../navbar/navbar'; */
import Carr from '../components/carrousel';
import React from 'react'
import Hero from '../components/imageBackground';
import ButonGit from '../components/buton';
import Footer from '../components/footer';


function Home({ navigation }) {
  return (
    <ScrollView>

      {/* <Navbar/> */}
      <Hero />

      <ButonGit />
      <View style={[{ width: "20%", alignSelf: 'center', backgroundColor: 'white', marginVertical: 10, }]}>
        <Button
          onPress={() => navigation.navigate('Cities')}
          title="Cities"
          color="#17F5F9"
          fontFamily='serif'
        />
      </View>
      <Carr />
      <Footer />
    </ScrollView>
  )
}



export default Home