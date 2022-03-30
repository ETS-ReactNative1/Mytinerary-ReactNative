import React from 'react';
import { Text, Dimensions, StyleSheet, ImageBackground, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import cities from './dates';

const Carr = () => (
  <View style={styles.container}>
    
    <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination>
       
      <View style={[styles.child, { backgroundColor: 'tomato' }]}>
        <Text style={styles.text}>1</Text>
      </View>
       
    </SwiperFlatList>
    
  </View>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: width * 0.5, textAlign: 'center' },
});

export default Carr;