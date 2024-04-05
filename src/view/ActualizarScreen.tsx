import React, {useEffect} from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text, ToastAndroid } from 'react-native';
import AppTextInput from "../components/AppTextInput";
import ActualizarViewModel from '../viewModels/ActualizarViewModel';
import { StackScreenProps } from "@react-navigation/stack";
import { PerfilStackParamList } from '../stacks/perfilStacksScreen';
import CustomSelect from "../components/AppSelectDoc";

interface Props extends StackScreenProps<PerfilStackParamList,'Actualizar'> { }

export default function Actualizar({navigation,route}:Props) {
  const {primer_nombre_cliente,segundo_nombre_cliente,primer_apellido_cliente,segundo_apeliido_cliente,id_tipo_documento,numero_documento_cliente, lugar_expedicion_documento,direccion_cliente,telefono_cliente, errorMessage ,onChange,actualizar} = ActualizarViewModel()
  useEffect(()=>{
    if(errorMessage !== ''){
      ToastAndroid.show(errorMessage as any, ToastAndroid.LONG)
    }
  },[errorMessage])

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.form}>
          <AppTextInput
            placeholder="Primer Nombre"
            value={primer_nombre_cliente} 
            onChangeText={text => onChange('primer_nombre_cliente',text)}
            keyboardType='default' 
          />
          <AppTextInput
            placeholder="Segundo Nombre"
            value={segundo_nombre_cliente} 
            onChangeText={text => onChange('segundo_nombre_cliente',text)} 
            keyboardType='default'
          />
          <AppTextInput
            placeholder="Primer Apellido"
            value={primer_apellido_cliente} 
            onChangeText={text => onChange('primer_apellido_cliente',text)} 
            keyboardType='default'
          />
          <AppTextInput
            placeholder="Segundo Apellido"
            value={segundo_apeliido_cliente} 
            onChangeText={text => onChange('segundo_apeliido_cliente',text)}
            keyboardType='default' 
          />
          <CustomSelect
            onDocumentTypeChange={(text:any) => onChange("id_tipo_documento", text)}
          />
          <AppTextInput
            placeholder="Numero Documento"
            value={numero_documento_cliente} 
            onChangeText={text => onChange('numero_documento_cliente',text)} 
            keyboardType='numeric'
          />
          <AppTextInput
            placeholder="Lugar De Expedicion"
            value={lugar_expedicion_documento} 
            onChangeText={text => onChange('lugar_expedicion_documento',text)} 
            keyboardType='default'
          />
          <AppTextInput
            placeholder="Direccion"
            value={direccion_cliente} 
            onChangeText={text => onChange('direccion_cliente',text)} 
            keyboardType='default'
          />
          <AppTextInput
            placeholder="Telefono"
            value={telefono_cliente} 
            onChangeText={text => onChange('telefono_cliente',text)} 
            keyboardType='numeric'
          />
          <TouchableOpacity style={styles.button} onPress={async ()=>{
            const response = await actualizar()
            if(actualizar() instanceof Error){
               return ToastAndroid.show(response as any, ToastAndroid.LONG)
            }
            if(response !== 0){
              ToastAndroid.show(response as any, ToastAndroid.LONG)
              ToastAndroid.show('Para visualizar los cambios inicie sesión nuevamente', ToastAndroid.LONG)
              navigation.navigate('Perfil')
            }}}>
            <Text style={styles.buttonText}>Actualizar Datos</Text>
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