import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../view/HomeScreen';
import HospitalizacionesScreen from '../view/HospitalizacionesScreen';
import ServiciosScreen from '../view/ServiciosScreen';
import VacunasScreen from '../view/VacunasScreen';

export type HomeStackParamList = {
  Home: undefined;
  Hospitalizaciones: {idMascota: string};
  Servicios:{idMascota:string};
  Vacunas:{idMascota:string}
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
            title:'Hospitalizaciones',
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

        <HomeStack.Screen 
          name='Vacunas' 
          component={VacunasScreen}
          options={{
            headerShown:true,
            title:'Vacunas',
            }}  
        />

      </HomeStack.Navigator>
  )
}

export default HomeStackScreen