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
        {/* <View style={[{ width: "20%", alignSelf:'center', backgroundColor:'transparent'}]}>
          <Button
            onPress={() => navigation.navigate('Cities')}
            title="Cities"
            color="#17F5F9" 
          />
        </View> */}
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