import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Descargas from '../view/DescargasScreen';

export type DescargasParamList = {
  Descargas: undefined;
}

const DescargasStack = createNativeStackNavigator <DescargasParamList>()

const DescargasStackScreen = () => {
  return (
      <DescargasStack.Navigator screenOptions={{
        headerShown:false
      }}>
        <DescargasStack.Screen 
          name='Descargas' 
          component={Descargas} 
        />
      </DescargasStack.Navigator>
  )
}

export default DescargasStackScreen