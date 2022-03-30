import React from 'react'
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button } from 'react-native';

function Hero() {
  return (
    <ScrollView>
      <View style={styles.containerImage}>
        <ImageBackground source={require('../../assets/images/fondo3.jpg')} style={styles.image}>
          <Text style={styles.tittle}>Mytinerary</Text>
          <Text style={styles.text}>Fin your perfect trip</Text>
          <View style={styles.container}>

            <View style={[{ width: "20%", margin: 10, backgroundColor: "#ff6536", fontSize: 30 }]}>
              <Button
                title="Cities"
                color="#FFEB3B"
                size={30}
                fontSize={30}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  containerImage: {
    height: 1000,
    display: 'flex',
    flexDirection: 'column',
  },
  tittle: {
    flex: 1,
    margin: 'auto',
    fontSize: 30,
  },
  text: {
    fontSize: 25,
    textAlign: 'center'
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