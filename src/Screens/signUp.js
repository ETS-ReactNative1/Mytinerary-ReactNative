import React from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity, TextInput } from 'react-native';

function CardSignUp({ navigation }) {
  return (
    <ScrollView style={{ display: 'flex', height: 1000, flexDirection: 'column' }}>
      <ImageBackground source={require('../../assets/plantilla3.jpg')} style={{ minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ backgroundColor: '#000', width: '90%', minHeight: 500, alignSelf: 'center', shadowColor: '#000', borderWidth: 2, borderRadius: 10, borderColor: '#17F5F9' }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', fontFamily: 'serif', paddingTop: 10, color: '#fff', textShadowColor: '#17F5F9', marginBottom: 10 }}>
            Sign Up
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderColor: "gray", borderWidth: 1.5, padding: 10, width: '60%', alignSelf: 'center', marginTop: 10, }}
            underlineColorAndroid="transparent"
            placeholder="Search a city"
            placeholderTextColor="gray"
            textAlign='justify'
            borderRadius={10}
            padding={10}
            fontSize={20}
            color="#fff"
            marginBottom={10}
          //onChangeText={(text) => { filterCity(text) }}

          />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default CardSignUp