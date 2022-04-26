import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './Navigation/drawerNavigation'

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
    <DrawerNavigator/>
    </NavigationContainer>
  );
}
}
