import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Beginers from '../Screens/Beginers'
import Intermediate from '../Screens/Intermediate'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab=createBottomTabNavigator()
const BottomTabNavigator=()=>{
  return(<Tab.Navigator screenOptions={({route})=>(
    {
      tabBarIcon:({focused,color,size})=>{
        let iconName
        if (route.name==='Beginers'){
          iconName=focused?'bug':'bug-outline'
        } else if (route.name==='15+ bees'){
          iconName=focused?'medal':'medal-outline'
        }
        return <Ionicons name={iconName} size={size} color={color} />
      }
    }

  )}
  tabBarOptions={{
    activeTintColor:'red',
    inactiveTintColor:'blue'
  }}
  >
  <Tab.Screen name="Beginers" component={Beginers} />
  <Tab.Screen name="15+ bees" component={Intermediate} />
  </Tab.Navigator>)

}

export default BottomTabNavigator