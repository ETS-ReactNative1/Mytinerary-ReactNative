import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

function Navbar(){
  return(
    <View style={styles.navContainer}>
      <View style={styles.nav}>
        <Text style={{ fontSize: 20, marginRight: 10, marginTop: 15 }}>Home </Text>
        <Text style={{ fontSize: 20, marginRight: 20, marginTop: 15 }}> Cities</Text>
        <Icon
          name='user'
          color='#000'
          size={30}

        />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    backgroundColor: '#FFEB3B',
    

  },
  navContainer: {
    display: 'flex',
    width: '100%',
    height: 100,
    backgroundColor: '#FFEB3B',
  },
}); 

export default Navbar