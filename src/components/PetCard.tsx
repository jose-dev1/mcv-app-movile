import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

interface PetCardProps {
  name: string;
  species: string;
  age: number;
  photo: string;
  onPressVaccines: () => void;
  onPressHospitalizationCertificates: () => void;
}

const PetCard = ({
  name,
  species,
  age,
  photo,
  onPressVaccines,
  onPressHospitalizationCertificates,
}: PetCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Especie: {species}</Text>
      <Text style={styles.text}>Edad: {age} años</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onPressVaccines}>
          <MaterialIcons name="vaccines" size={24} color="white" />
          <Text style={styles.buttonText}>Vacunas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHospitalizationCertificates}>
          <FontAwesome5 name="hospital-alt" size={24} color="white" />
          <Text style={styles.buttonText}>Ingresos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressHospitalizationCertificates}>
          <Ionicons name="document-attach" size={24} color="white" />
          <Text style={styles.buttonText}>Servicios</Text>
        </TouchableOpacity>
      </View>
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
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
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
  },
});

export default PetCard;
