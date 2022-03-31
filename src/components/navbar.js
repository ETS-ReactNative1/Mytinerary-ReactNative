import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';

function Navbar(){
  return(
    <View style={styles.navContainer}>
      <View style={styles.nav}>
        <TouchableOpacity
          activeOpacity={0.6}
          underlayColor='#DDDDDD'
          onPress={() => alert('welcome')}
        >
        <Text style={{ fontSize: 20, marginRight: 10, marginTop: 15 }}>Home </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.3}
          underlayColor='#DDDDDD'
          onPress={() => alert('Go to cities')}
        >
        <Text style={{ fontSize: 20, marginRight: 20, marginTop: 15 }}> Cities</Text>
        </TouchableOpacity>
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
    
    

  },
  navContainer: {
    display: 'flex',
    width: '100%',
    height: 100,
    
  },
}); 

export default Navbar