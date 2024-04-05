import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Spaciado from "../utils/Spaciado";
import Colors from "../utils/colores";
import FontSize from "../utils/FontSize";
import Font from "../utils/Fonst";
import AppTextInput from "../components/AppTextInput";
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { INICIAR_SESION } from "../api/api_rest_login";
import { LocalStorage } from "../utils/LocalStorage";

interface Props extends StackScreenProps<RootStackParamList, "LoginScreen"> {}

export const LoginScreen = ({ navigation, route }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const { getItem } = LocalStorage();
    getItem("user").then((item) => {
      const data = JSON.parse(item as any);
      if (data?.id_usuario !== null && data?.id_usuario !== undefined) {
        navigation.push("Perfil", { correo_usuario: data.correo_usuario });
      }
    });
  }, []);

  const onPressLogin = async () => {
    if (email != "" && password != "") {
      await INICIAR_SESION(
        {
          correo: email,
          pass: password,
        },
        (response: any) => {
          navigation.navigate("Perfil", {
            correo_usuario: response.user.correo_usuario,
          });
        }
      );
    } else {
      Alert.alert("Alerta", "Todos los campos no pueden ir vacios");
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
              // fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              color: Colors.darkText,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            ¡Bienvenido de nuevo, te hemos extrañado!
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
        </View>

        <View></View>
        <TouchableOpacity
          onPress={onPressLogin}
          style={{
            padding: Spaciado * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spaciado * 3,
            borderRadius: Spaciado,
            shadowColor: Colors.primary,
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
              // fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegistroScreen")}
          style={{
            padding: Spaciado,
          }}
        >
          <Text
            style={{
              // fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Crear nueva cuenta
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spaciado * 3,
          }}
        >
          <Text
            style={{
              // fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
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

const styles = StyleSheet.create({});
