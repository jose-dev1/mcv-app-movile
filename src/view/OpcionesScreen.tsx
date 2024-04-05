import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity,ToastAndroid,Linking } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import {OpcionesStackParamList} from '../stacks/opcionesStacksScreen'
import { LocalStorage } from '../utils/LocalStorage';
import { MaterialIcons } from '@expo/vector-icons';
import EliminarViewModel from '../viewModels/EliminarViewModel';


interface Props extends StackScreenProps<OpcionesStackParamList,'Opciones'> { }

export default function Opciones({navigation,route}:Props) {
  const [isVisible, setIsVisible] = useState(false);
  const {Eliminar} = EliminarViewModel()

  const handlePress = () => {
    const phoneNumber = '573108543246';
    const message = 'Hola, me gustaría obtener información sobre los servicios veterinarios que ofrecen. ¿Podrían ayudarme con eso?';
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(whatsappUrl)
      .then((data) => {
        ToastAndroid.show('WhatsApp abierto',ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show('Por favor, asegúrate de tener instalada la aplicación de WhatsApp en tu dispositivo.',ToastAndroid.SHORT);
      });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.form} onPress={handlePress}>
          <Text>Contactanos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.form} onPress={async() =>
          {
            const {remove} = LocalStorage()
            await remove('user')
            await remove('client')
            navigation.popToTop()
          } }>
            <Text>Cerrar sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.formotuchable}  onPress={toggleVisibility}>
            <Text>Desactivar cuenta</Text>
            {isVisible ? (
              <MaterialIcons name="keyboard-arrow-up" size={24}/>
            ):<MaterialIcons name="keyboard-arrow-down" size={24}/>}
        </TouchableOpacity>
        {isVisible && (
          <View style={styles.form}>
            <View style={styles.contenttext}>
              <Text style={styles.text}>¿Estás seguro?</Text>
            </View>
            <Text style={styles.textalert}>¡Tu cuenta será desactivada y este cambio no será reversible en 30 días!</Text>
            <TouchableOpacity style={styles.button} onPress={async ()=>{
                const response = await Eliminar()
                if(Eliminar() instanceof Error){
                  ToastAndroid.show(response as any, ToastAndroid.LONG)
                }else{
                  ToastAndroid.show(response as any, ToastAndroid.LONG)
                  const {remove} = LocalStorage()
                  await remove('user')
                  await remove('client')
                  navigation.popToTop();
                }}}>
                <Text style={styles.buttonText}>Desactivar Cuenta</Text>
            </TouchableOpacity>
          </View>
        )}
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
    marginBottom:'5%',
  },
  buttonPressed: {
    height: 600,
  },
  formotuchable:{
    width:'90%',
    height:'auto',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:20,
    marginBottom:'5%',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  contenttext:{
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    paddingBottom:'1%'
  },
  textalert:{
    fontSize:17,
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
  }
});