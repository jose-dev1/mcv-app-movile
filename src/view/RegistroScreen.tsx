import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colores from "../utils/colores";
import Font from "../utils/Fonst";
import FontSize from "../utils/FontSize";
import Layaout from "../utils/Layaout";
import Spaciado from "../utils/Spaciado";
import AppTextInput from "../components/AppTextInput";
import CustomSelect from "../components/AppSelectInput";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { REGISTRO_USUARIO } from "../api/api_rest_registro";

interface RegistroScreenProps {}
export const RegistroScreen: React.FC<RegistroScreenProps> = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [genero, setGenero] = React.useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressRegistro = async () => {
    if (email !== "" && password !== "" && genero !== "") {
      try {
        const response = await REGISTRO_USUARIO({
          correo: email,
          pass: password,
          rol: 2,
          genero: genero,
        });
        Alert.alert("Alerta", "Usuario registrado exitosamente");
        navigation.navigate("LoginScreen");
      } catch (error) {
        Alert.alert("Alerta", "Error al registrar usuario");
      }
    } else {
      Alert.alert("Alerta", "Todos los campos son obligatorios");
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          padding: Spaciado * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/MVC.png")}
            style={{ width: 150, height: 150, padding: Spaciado * 10 }}
          />
          <Text
            style={{
              fontSize: FontSize.large,
              color: colores.darkText,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            ¡Obten tu cuenta gratis aqui!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spaciado * 3,
          }}
        >
          <AppTextInput
            onChangeText={(value: string) => setEmail(value)}
            placeholder="Email"
          />
          <AppTextInput
            onChangeText={(value: string) => setPassword(value)}
            secureTextEntry
            placeholder="Password"
          />
          <CustomSelect onGenreChange={setGenero} />
        </View>

        <View></View>
        <TouchableOpacity
          onPress={onPressRegistro}
          style={{
            padding: Spaciado * 2,
            backgroundColor: colores.primary,
            marginVertical: Spaciado * 3,
            borderRadius: Spaciado,
            shadowColor: colores.primary,
            shadowOffset: {
              width: 0,
              height: Spaciado,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spaciado,
          }}
        >
          <Text
            style={{
              color: colores.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Registrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            padding: Spaciado,
          }}
        >
          <Text
            style={{
              color: colores.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Volver al login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spaciado * 3,
          }}
        >
          <Text
            style={{
              color: colores.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Síguenos en nuestras redes sociales
          </Text>
          <View
            style={{
              marginTop: Spaciado,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spaciado,
                borderRadius: Spaciado / 2,
                marginHorizontal: Spaciado,
              }}
            >
              <FontAwesome name="facebook-square" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spaciado,
                borderRadius: Spaciado / 2,
                marginHorizontal: Spaciado,
              }}
            >
              <FontAwesome name="instagram" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spaciado,
                borderRadius: Spaciado / 2,
                marginHorizontal: Spaciado,
              }}
            >
              <FontAwesome name="youtube" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
