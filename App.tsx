import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen } from "./src/view/LoginScreen";
import { PerfilScreen } from "./src/view/PerfilScreen";
import { RegistroScreen } from "./src/view/RegistroScreen";


export type RootStackParamList = {
  LoginScreen: undefined;
  RegistroScreen: undefined;
  Perfil: { correo_usuario: string };
}

const Stack = createNativeStackNavigator <RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }} initialRouteName='LoginScreen'>
        <Stack.Screen 
          name='LoginScreen' 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name='Perfil' 
          component={PerfilScreen} 
        />
        <Stack.Screen 
          name='RegistroScreen' 
          component={RegistroScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App