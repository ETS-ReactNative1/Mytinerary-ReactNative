import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, Dimensions } from 'react-native';
import Footer from '../components/footer';

function Cities({navigation}) {
  return (    
    <View style={styles.containerCities}>
      <View> 
        
      <ImageBackground resizeMode='cover' style={styles.imagenFodo} source={require('../../assets/images/fondo.jpg')}>

      </ImageBackground>
      </View>
      {/* <ScrollView>
        <Text>Eren yaeger</Text>
      </ScrollView>
      <View style={[{ width: "25%", alignSelf: 'center', backgroundColor: 'transparent', marginVertical: 10, }]}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Home"
          color="#17F5F9"
        />
      </View>
      <Footer/> */}
    </View>
  )
}

const styles = StyleSheet.create({
  containerCities: {
   flex:1,
   flexDirection:'column',
   width:'100%',
   height:1000,
  },
  imagenFodo:{
    flex:1,
    justifyContent:'center',
  }
});

export default Cities