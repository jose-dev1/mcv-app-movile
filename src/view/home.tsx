import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import PetCard from '../components/PetCard';

interface Pet {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  photo: string;
}

export default function Home() {
  const [pets, setPets] = useState<Pet[]>([
    { name: "Max", species: "Perro", breed: "Golden Retriever", age: 5, color: "Dorado", photo: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" },
    { name: "Luna", species: "Gato", breed: "Siamés", age: 3, color: "Blanco", photo: "https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg" }
  ]);

  const handleVaccinePress = () => {
    console.log('Botón "Ver Vacunas" presionado');
  };

  const handleSettingsPress = () => {
    console.log('Botón "Configuración" presionado');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi can veterinaria</Text>
        <Text style={styles.subtitle}>¡Cuida a tus mascotas como se merecen!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perros</Text>
          {pets.filter(pet => pet.species === 'Perro').map((pet, index) => (
            <PetCard
              key={index}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              photo={pet.photo}
              onPressVaccines={handleVaccinePress}
            />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gatos</Text>
          {pets.filter(pet => pet.species === 'Gato').map((pet, index) => (
            <PetCard
              key={index}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              photo={pet.photo}
              onPressVaccines={handleVaccinePress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#3a0ca3',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});