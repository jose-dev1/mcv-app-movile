import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface PetCardProps {
  name: string;
  species: string;
  age: number;
  photo: string;
  onPressVaccines: () => void;
}

const PetCard = ({ name, species, age, photo, onPressVaccines }:PetCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.text}>Especie: {species}</Text>
      <Text style={styles.text}>Edad: {age} años</Text>
      <TouchableOpacity style={styles.button} onPress={onPressVaccines}>
        <Text style={styles.buttonText}>Ver Vacunas</Text>
      </TouchableOpacity>
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

export default PetCard;