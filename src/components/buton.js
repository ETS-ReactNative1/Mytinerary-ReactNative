import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

function ButonGit() {
  return (
    <View>
      <View style={styles.containerDos}>
        <Image
          source={require('../../assets/images/world.gif')}
          style={styles.image}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    alignSelf:'center', 
  },
  containerDos: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export default ButonGit