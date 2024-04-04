import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface PetCardProps {
  clientName: string
  petName: string;
  phoneNumber: string;
  addmisionDate: string;
  exitDate: string;
  serviceCompleted: boolean;
  observations: string
}


const HospitalizationCard = ({ clientName, petName, phoneNumber, addmisionDate, exitDate, serviceCompleted, observations}: PetCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Mascota: {petName}</Text>
      <Text style={styles.text}>Dueno: {clientName}</Text>
      <Text style={styles.text}>Telefono dueno: {phoneNumber}</Text>
      <Text style={styles.text}>Fecha ingreso: {addmisionDate}</Text>
      <Text style={styles.text}>Fecha Salida: {exitDate}</Text>
      <Text style={styles.text}>Servicio Finalizado: {serviceCompleted ? 'si': 'no'}</Text>

      <TouchableOpacity style={styles.formotuchable}  onPress={()=> setIsVisible(!isVisible)}>
            <Text>Obcervaciones</Text>
            {isVisible ? (
              <MaterialIcons name="keyboard-arrow-up" size={24}/>
            ):<MaterialIcons name="keyboard-arrow-down" size={24}/>}
        </TouchableOpacity>
        {isVisible && (
          <View style={styles.form}>
            <View style={styles.contenttext}>
              <Text style={styles.text}>{observations}</Text>
            </View>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%', 
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#3a0ca3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    flex: 2,
    marginHorizontal: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },form:{
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
  textalert:{
    fontSize:17,
  },
});

export default HospitalizationCard;
