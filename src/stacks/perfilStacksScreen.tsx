import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Perfil from "../view/PerfilUserScreen";
import Actualizar from "../view/ActualizarScreen";
import RegistroCliente from "../view/RegistroClienteScreen";
import Password from '../view/PasswordScreen';


export type PerfilStackParamList = {
  Perfil: undefined;
  Actualizar: undefined;
  RegistroCliente: undefined;
  Password: undefined;
};

const PerfilStack = createNativeStackNavigator<PerfilStackParamList>();

const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen
        name="Actualizar"
        component={Actualizar}
        options={{
          headerShown: true,
          title: "Actualizar Datos",
        }}
      />
      <PerfilStack.Screen
        name="RegistroCliente"
        component={RegistroCliente}
        options={{
          headerShown: true,
          title: "Completar Registro",
        }}
      />
      <PerfilStack.Screen 
          name='Password' 
          component={Password}
          options={{
            headerShown:true,
            title:'Actualizar Contarseña',
            }}  
        />
    </PerfilStack.Navigator>
  );
};

export default PerfilStackScreen;
