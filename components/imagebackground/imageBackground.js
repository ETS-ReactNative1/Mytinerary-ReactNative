import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button } from 'react-native';
import Navbar from '../navbar/navbar';

function Hero() {
  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <ImageBackground source={require('../../assets/images/fondo.jpg')} style={styles.image}>
          <Navbar />
          <View style={styles.textContainer}>
            <Text style={styles.text}>"Find your perfect trip, designed by insiders who know and love their cities!"</Text>
          </View>
          <View style={styles.container}>

            {/* <View style={[{ width: "20%", margin: 10, backgroundColor: "#ff6536", fontSize: 30 }]}>
              <Button
                title="Cities"
                color="#17F5F9"
                size={30}     
              />
            </View> */}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    height: 800,
    display: 'flex',
    flexDirection: 'column',
  },
  textContainer:{
    marginTop:50,
    fontWeight:'900',
    backgroundColor:'#04D2D6',
    borderRadius:20,
    width:'80%',
    alignSelf:'center'
  },  
  text: {
    fontSize: 20,
    padding:10,
    textAlign: 'center',
    color:'#000',
  },
  image: {
    height: '100%'
  },
  container: {
    flex: 1,
    height: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
});

export default Hero