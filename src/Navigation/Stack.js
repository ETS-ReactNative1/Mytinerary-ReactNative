import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CityDetails from '../Screens/detalle';
//import CommentsScreen from '../Screens/commentsScreen'; 
import Cities from '../Screens/cities';
import CommentsScreen from '../Screens/coments';


const Stack = createStackNavigator();
export default function CityStackNavigation() {

  return (

    <Stack.Navigator initialRouteName="Cities"
      screenOptions={{ headerBackTitle: "Back" }} /* este btn solo es para AIOS */
    >
      <Stack.Screen name="Cities" component={Cities}
        options={{ headerShown: false, }} />

      <Stack.Screen name="City" component={CityDetails} />
      <Stack.Screen name="Comments" component={CommentsScreen} options={({ navigation, route }) => ({
        headerTitle: "Comments"
      })} />
    </Stack.Navigator>

  )
}