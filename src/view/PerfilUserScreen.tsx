import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { PerfilStackParamList } from "../stacks/perfilStacksScreen";
import PerfilUserViewModel from "../viewModels/PerfilUserViewModel";

interface Props extends StackScreenProps<PerfilStackParamList, "Perfil"> {}

export default function Perfil({ navigation, route }: Props) {
  const {primer_nombre_cliente,primer_apellido_cliente,correo_usuario} = PerfilUserViewModel()
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>{`${primer_nombre_cliente} ${primer_apellido_cliente}`}</Text>
        <Text>{correo_usuario}</Text>
      </View>
      <TouchableOpacity
        style={styles.form}
        onPress={() => navigation.navigate("Actualizar")}
      >
        <Text>Actualizar Datos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.form}
        onPress={() => navigation.navigate("RegistroCliente")}
      >
        <Text>Completar Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.form} onPress={() => navigation.navigate('Password')}>
            <Text>Cambiar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "10%",
  },
  form: {
    width: "90%",
    height: "auto",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    marginBottom: "5%",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
