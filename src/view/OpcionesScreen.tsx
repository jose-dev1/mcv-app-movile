import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity,Button } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import {OpcionesStackParamList} from '../stacks/opcionesStacksScreen'
import { LocalStorage } from '../utils/LocalStorage';
interface Props extends StackScreenProps<OpcionesStackParamList,'Opciones'> { }

export default function Opciones({navigation,route}:Props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.form} onPress={async() =>
          {
            const {remove} = LocalStorage()
            await remove('user')
            await remove('client')
            navigation.popToTop()
          } }>
            <Text>Cerrar sesion</Text>
        </TouchableOpacity>
    </View>
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
});