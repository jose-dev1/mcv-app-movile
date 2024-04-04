import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Alert,
} from "react-native";
import AppTextInput from "../components/AppTextInput";
import { StackScreenProps } from "@react-navigation/stack";
import { LocalStorage } from "../utils/LocalStorage";
import { PerfilStackParamList } from "../stacks/perfilStacksScreen";
import CustomSelect from "../components/AppSelectDoc";
import { REGISTRO_CLIENTE } from "../api/api_rest_registro";

interface Props
  extends StackScreenProps<PerfilStackParamList, "RegistroCliente"> {}

export default function RegistroCliente({ navigation, route }: Props) {
  const [values, setValues] = useState({
    primer_nombre_cliente: "",
    segundo_nombre_cliente: "",
    primer_apellido_cliente: "",
    segundo_apellido_cliente: "",
    id_tipo_documento: "",
    numero_documento_cliente: "",
    lugar_expedicion_documento: "",
    direccion_cliente: "",
    telefono_cliente: "",
    estado_cliente: "1",
    id_usuario: "",
  });

  const onChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  useEffect(() => {
    const { getItem } = LocalStorage();
    getItem("user").then((item) => {
      const data = JSON.parse(item as any);
      setValues({ ...values, id_usuario: data.correo_usuario });
    });
  }, []);

  const handleRegistro = async () => {
    try {
      if (
        values.primer_nombre_cliente &&
        values.primer_apellido_cliente &&
        values.id_tipo_documento &&
        values.numero_documento_cliente &&
        values.lugar_expedicion_documento &&
        values.direccion_cliente &&
        values.telefono_cliente
      ) {
        await REGISTRO_CLIENTE(values);
        ToastAndroid.show(
          "Cliente registrado correctamente",
          ToastAndroid.SHORT
        );
        navigation.navigate("Perfil");
      } else {
        Alert.alert("Alerta", "Todos los campos son obligatorios");
      }
    } catch (error) {
      console.error("Error al registrar el cliente:", error);
      ToastAndroid.show("Error al registrar el cliente", ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.form}>
          <AppTextInput
            placeholder="Primer Nombre"
            onChangeText={(text) => onChange("primer_nombre_cliente", text)}
            keyboardType="default"
          />
          <AppTextInput
            placeholder="Segundo Nombre"
            onChangeText={(text) => onChange("segundo_nombre_cliente", text)}
            keyboardType="default"
          />
          <AppTextInput
            placeholder="Primer Apellido"
            onChangeText={(text) => onChange("primer_apellido_cliente", text)}
            keyboardType="default"
          />
          <AppTextInput
            placeholder="Segundo Apellido"
            onChangeText={(text) => onChange("segundo_apellido_cliente", text)}
            keyboardType="default"
          />
          <CustomSelect
            onDocumentTypeChange={(text) => onChange("id_tipo_documento", text)}
          />
          <AppTextInput
            placeholder="Numero Documento"
            onChangeText={(text) => onChange("numero_documento_cliente", text)}
            keyboardType="numeric"
          />
          <AppTextInput
            placeholder="Lugar de Expedicion"
            onChangeText={(text) =>
              onChange("lugar_expedicion_documento", text)
            }
            keyboardType="default"
          />
          <AppTextInput
            placeholder="Dirección"
            onChangeText={(text) => onChange("direccion_cliente", text)}
            keyboardType="default"
          />
          <AppTextInput
            placeholder="Teléfono"
            onChangeText={(text) => onChange("telefono_cliente", text)}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleRegistro}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: "5%",
  },
  button: {
    backgroundColor: "#3a0ca3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
