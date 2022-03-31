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
        <View style={[{ width: "20%", margin: 10, borderColor:'transparent', alignSelf:'center', padding:10, borderRadius:30,}]}>
          <Button
            title="Cities"
            color="#17F5F9" 
            borderRadius={30}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    margin: 20,
    alignSelf:'center',
  },
  containerDos: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export default ButonGit