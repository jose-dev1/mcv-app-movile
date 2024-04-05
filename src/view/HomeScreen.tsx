import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import PetCard from '../components/PetCard';
import { LocalStorage } from '../utils/LocalStorage';
import MascotaViewModel from '../viewModels/MascotasViewModel';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../stacks/homeStacksScreen';

interface Props extends StackScreenProps<HomeStackParamList,'Home'> { }

export default function Home({navigation,route}:Props) {
  const { values } = MascotaViewModel();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi can veterinaria</Text>
        <Text style={styles.subtitle}>¡Cuida a tus mascotas como se merecen!</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {values.map((pet: {id: string, id_historia_clinica:string, nombre_mascota: string; raza_mascota: string }, index: number) => (
  <View s tyle={styles.section} key={index}>
    <PetCard
      name={pet.nombre_mascota}
      species={pet.raza_mascota}
      photo='https://img.freepik.com/foto-gratis/lindo-mascota-collage-aislado_23-2150007407.jpg'
      onPressVaccines={()=>navigation.navigate('Vacunas',{idMascota:pet.id})}
      onPressHospitalizationCertificates={()=>navigation.navigate('Hospitalizaciones',{idMascota:pet.id})} 
      onPressServices={()=>navigation.navigate('Servicios',{idMascota:pet.id_historia_clinica})}
    />
  </View>
))}

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
