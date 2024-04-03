import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { PerfilStackParamList } from '../stacks/perfilStacksScreen';

interface Props extends StackScreenProps<PerfilStackParamList,'Perfil'> { }

export default function Perfil({navigation,route}:Props) {
  return (
    <View style={styles.container}>
        
        <View style={styles.form}>
          <Text>Vista Perfil</Text>
        </View>
        <TouchableOpacity style={styles.form} onPress={() => navigation.navigate('Actualizar')}>
            <Text>Actualizar Datos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.form}>
            <Text>Cambiar contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.form}>
            <Text>Eliminar cuenta</Text>
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