import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opciones from '../view/OpcionesScreen';
import { LoginScreen } from '../view/LoginScreen';
export type OpcionesStackParamList = {
  Opciones: undefined;
  LoginScreen: undefined;
}

const OpcionesStack = createNativeStackNavigator <OpcionesStackParamList>()

const OpcionesStackScreen = () => {
  return (
      <OpcionesStack.Navigator screenOptions={{
        headerShown:false
      }}>
        <OpcionesStack.Screen 
          name='Opciones' 
          component={Opciones} 
        />
        <OpcionesStack.Screen 
          name='LoginScreen' 
          component={LoginScreen} 
        />
      </OpcionesStack.Navigator>
  )
}

export default OpcionesStackScreen