
import {ScrollView} from 'react-native';
import Navbar from '../navbar/navbar';

import React from 'react'
import Hero from '../imagebackground/imageBackground';

function Home(){
  return(
    <ScrollView>
      
      <Navbar/>
      <Hero />

    </ScrollView>
  )
}



export default Home