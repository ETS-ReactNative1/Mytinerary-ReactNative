import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';
import Footer from '../components/footer';
import CardCity from '../components/cardCity';


function Cities({ navigation }) {

  return (
    <ScrollView style={styles.containerCities}>
      <ImageBackground
        source={require('../../assets/images/travel4.png')}
        style={styles.imageFondo}
        resizeMode='cover'
      >
        <Text style={styles.text}>MyTinerary</Text>
      </ImageBackground>

      <ScrollView>
        <CardCity navigation={navigation} />
      </ScrollView>

      <View style={[{ width: "25%", alignSelf: 'center', backgroundColor: 'transparent', marginVertical: 10, }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          title="Home"
          fontFamily='serif'
          style={{ alignItems: "center", justifyContent: "center", marginTop: 20, marginBottom: 20, backgroundColor: "#17F5F9", width: 100, height: 50, borderRadius: 20, marginLeft: "auto", marginRight: "auto" }}


        ><Text style={{ color: "#000", fontSize: 20 }}>Home</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerCities: {
    flex: 1,
    flexDirection: 'column',

  },
  imageFondo: {
    flex: 1,

    alignSelf: 'center',
    width: '100%',
    height: 600,
  },
  text: {
    display: 'flex',
    fontSize: 60,
    textAlign: 'center',
    color: '#000',
    paddingTop: 10,
    fontFamily: 'serif',
  },
});

export default Cities