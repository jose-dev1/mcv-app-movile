import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../view/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
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
      </HomeStack.Navigator>
  )
}

export default HomeStackScreen