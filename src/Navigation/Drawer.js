import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/home';
//import PlaceStackNavigation from './Stack'
//import UserTabsNavigation from './Tabs'

import cities from '../Screens/cities';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cities" component={cities} />
      {/* <Drawer.Screen name="Places" component={PlaceStackNavigation} />
      <Drawer.Screen name="User" component={UserTabsNavigation} /> */}
    </Drawer.Navigator>

  );
} 

