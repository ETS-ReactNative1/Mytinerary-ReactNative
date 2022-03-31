import react from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.img}>
        <TouchableOpacity
          activeOpacity={0.6}
          underlayColor='#DDDDDD'
          onPress={()=> alert('Welcome to My tinerary !')}
        >
          <Image
            source={require('../../assets/icon.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#17F5F9',
    height: 400,
    alignContent: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '60%',
    height: '60%',
    alignSelf: 'center',
    marginBottom: 80,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  }
});

export default Footer
