import React, {useEffect} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import AppTextInput from "../components/AppTextInput";
import PasswordViewModel from '../viewModels/PasswordViewModel';
import { StackScreenProps } from "@react-navigation/stack";
import { PerfilStackParamList } from '../stacks/perfilStacksScreen';

interface Props extends StackScreenProps<PerfilStackParamList,'Password'> { }

export default function Password({navigation,route}:Props) {
  const {contraseña,confirmarContraseña, errorMessage ,onChange,actualizar} = PasswordViewModel()

  useEffect(()=>{
    if(errorMessage !== ''){
      ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    }
  },[errorMessage])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.form}>
          <AppTextInput
            placeholder="Ingrese la nueva contraseña"
            value={contraseña} 
            onChangeText={text => onChange('contraseña',text)}
            keyboardType='default' 
            secureTextEntry
          />
          <AppTextInput
            placeholder="Confirme la nueva contraseña"
            value={confirmarContraseña} 
            onChangeText={text => onChange('confirmarContraseña',text)} 
            keyboardType='default'
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={async ()=>{
            const response = await actualizar()
            if(actualizar() instanceof Error){
              return ToastAndroid.show(response as any, ToastAndroid.LONG)
            }
            if(response !== 0){
              ToastAndroid.show(response as any, ToastAndroid.LONG)
              navigation.navigate('Perfil')
            }}}>
            <Text style={styles.buttonText}>Actualizar Contraseña</Text>
          </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    paddingTop:'10%'
  },
  form:{
    width:'90%',
    height:'auto',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:20,
    marginBottom:'5%'
  },
  formButton:{
    paddingTop:'5%',
    width:'30%',
  },
  button: {
    backgroundColor: '#3a0ca3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});