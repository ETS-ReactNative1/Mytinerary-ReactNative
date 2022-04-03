import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/home';
import CityStackNavigation from './Stack'
import CardSignUp from '../Screens/signUp'
import CardSignIn from '../Screens/signIn'
import cities from '../Screens/cities';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cities" component={CityStackNavigation} />
      <Drawer.Screen name="signup" component={CardSignUp} />
      <Drawer.Screen name='signin' component={CardSignIn} />
      {/* <Drawer.Screen name="Places" component={PlaceStackNavigation} />
      <Drawer.Screen name="User" component={UserTabsNavigation} /> */}
    </Drawer.Navigator>

  );
}

