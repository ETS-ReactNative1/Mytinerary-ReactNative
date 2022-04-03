import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity } from 'react-native';

function CardSignIn({ navigation }) {
  return (
    <ScrollView style={{ display: 'flex', height: 1000, flexDirection: 'column' }}>

      <ImageBackground source={require('../../assets/plantilla3.jpg')} style={{ height: 1000 }}>

        <Text style={{ fontSize: 30 }}>
          Holi soy sign in
        </Text>

      </ImageBackground>

    </ScrollView>
  )
}

export default CardSignIn