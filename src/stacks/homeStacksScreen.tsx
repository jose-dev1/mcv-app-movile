import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../view/HomeScreen';
import HospitalizacionesScreen from '../view/HospitalizacionesScreen';
import ServiciosScreen from '../view/ServiciosScreen';

export type HomeStackParamList = {
  Home: undefined;
  Hospitalizaciones: undefined
  Servicios:{idMascota:string}
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
        <HomeStack.Screen 
          name='Servicios' 
          component={ServiciosScreen}
          options={{
            headerShown:true,
            title:'Servicios Registrados',
            }}  
        />
      </HomeStack.Navigator>
  )
}

export default HomeStackScreen