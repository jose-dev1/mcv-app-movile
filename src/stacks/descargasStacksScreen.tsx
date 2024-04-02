import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Descargas from '../view/descargas';

export type RootStackParamList = {
  Descargas: undefined;
}

const DescargasStack = createNativeStackNavigator <RootStackParamList>()

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