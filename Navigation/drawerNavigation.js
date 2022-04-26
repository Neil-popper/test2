import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import About from '../Screens/About';
import Codes from '../Screens/Codes';
import BottomTabNavigator from './tabNavigation'
import LoginScreen from '../Screens/login'

const Drawer = createDrawerNavigator();
const DrawerNavigator = () =>
   {
     return(
     <Drawer.Navigator>
      <Drawer.Screen name="About the game" component={About}></Drawer.Screen>
      <Drawer.Screen name="Codes" component={Codes}></Drawer.Screen>
      <Drawer.Screen name="Tips and tricks" component={BottomTabNavigator}></Drawer.Screen>
      <Drawer.Screen name="Register" component={LoginScreen}></Drawer.Screen>
      
    </Drawer.Navigator>)};
     
export default DrawerNavigator;