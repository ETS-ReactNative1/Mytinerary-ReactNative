
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity
          onPress={() => navigation.navigate('Cities')}
          title="Cities"
          fontFamily='serif'
          style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#17F5F9", width: 100, height: 50, borderRadius: 20, marginLeft: "auto", marginRight: "auto" }}


        ><Text style={{ color: "#000", fontSize: 20 }}>Cities</Text>
        </TouchableOpacity>
      </View>
      <Carr />
      <Footer />
    </ScrollView>
  )
}



export default Home