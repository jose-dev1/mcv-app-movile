import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stacks/homeStacksScreen';
import DescargasStackScreen from './stacks/descargasStacksScreen';
import OpcionesStackScreen from './stacks/opcionesStacksScreen';
import PerfilStackScreen from './stacks/perfilStacksScreen';
import AntDesing from '@expo/vector-icons/AntDesign'

export type RootStackParamList = {
  HomeStackScreen: undefined;
  PerfilStackScreen:undefined;
  DescargasStackScreen:undefined;
  OpcionesStackScreen:undefined
}

const Tab = createBottomTabNavigator <RootStackParamList>()

const TabStackScreen = () => {

  return (

      <Tab.Navigator
              screenOptions={{
                tabBarActiveTintColor: 'purple', 
                headerShown: false, 
                tabBarLabel: () => null,
              }}>
        <Tab.Screen 
          name='HomeStackScreen' 
          component={HomeStackScreen}
          options={{ tabBarIcon: ({ color }) => (
            <AntDesing name="home" size={40} color={color}/>)}}  
        />
        <Tab.Screen 
          name='PerfilStackScreen' 
          component={PerfilStackScreen} 
          options={{ tabBarIcon: ({ color }) => (
                  <AntDesing name="user" size={40} color={color}/>)}}
        />
        <Tab.Screen 
          name='DescargasStackScreen' 
          component={DescargasStackScreen} 
          options={{ tabBarIcon: ({ color }) => (
            <AntDesing name="clouddownloado" size={40} color={color}/>)}}
        />
        <Tab.Screen 
          name='OpcionesStackScreen' 
          component={OpcionesStackScreen} 
          options={{ tabBarIcon: ({ color }) => (
            <AntDesing name="setting" size={40} color={color}/>)}}
        />
      </Tab.Navigator>

  )
}

export default TabStackScreen
