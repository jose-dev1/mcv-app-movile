import React from "react";
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { INICIAR_SESION } from "../api/api_rest_login";

export const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPressLogin = async () => {
    if (email != "" && password != "") {
      await INICIAR_SESION(
        {
          correo: email,
          pass: password,
        },
        (response: any) => {
          console.log(response);
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
              fontFamily: Font["poppins-semiBold"],
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
            onChangeText={(value) => setEmail(value)}
            placeholder="Email"
          />
          <AppTextInput
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
            placeholder="Password"
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate()}
            style={{
              padding: Spaciado,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.small,
                color: Colors.primary,
                alignSelf: "flex-end",
              }}
            >
              Olvido la contraseña ?
            </Text>
          </TouchableOpacity>
        </View>
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
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate()}
          style={{
            padding: Spaciado,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
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
              fontFamily: Font["poppins-semiBold"],
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
