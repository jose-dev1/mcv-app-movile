import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../view/HomeScreen';
import HospitalizacionesScreen from '../view/HospitalizacionesScreen';

export type HomeStackParamList = {
  Home: undefined;
  Hospitalizaciones: undefined
}

const HomeStack = createNativeStackNavigator <HomeStackParamList>()

const HomeStackScreen = () => {
  return (
      <HomeStack.Navigator screenOptions={{
        headerShown:false
      }}>
        <HomeStack.Screen 
          name='Home' 
          component={Home} 
        />
        <HomeStack.Screen 
          name='Hospitalizaciones' 
          component={HospitalizacionesScreen}
          options={{
            headerShown:true,
            title:'Home',
            }}  
        />
      </HomeStack.Navigator>
  )
}

export default HomeStackScreen