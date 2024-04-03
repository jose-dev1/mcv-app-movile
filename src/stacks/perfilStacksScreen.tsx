import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Perfil from '../view/PerfilUserScreen';
import Actualizar from '../view/ActualizarScreen';

export type PerfilStackParamList = {
  Perfil: undefined;
  Actualizar: undefined;
}

const PerfilStack = createNativeStackNavigator <PerfilStackParamList>()

const PerfilStackScreen = () => {
  return (
      <PerfilStack.Navigator screenOptions={{
        headerShown:false
      }}>
        <PerfilStack.Screen 
          name='Perfil' 
          component={Perfil} 
        />
        <PerfilStack.Screen 
          name='Actualizar' 
          component={Actualizar}
          options={{
            headerShown:true,
            title:'Actualizar Datos',
            }}  
        />
      </PerfilStack.Navigator>
  )
}

export default PerfilStackScreen