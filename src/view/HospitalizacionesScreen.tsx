import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HospitalizationCard from '../components/HospitalizationCard';

interface hospitalization{
  clientName: string,
  petName: string;
  phoneNumber: string;
  addmisionDate: string;
  exitDate: string;
  serviceCompleted: boolean;
  observations: string
}

const HospitalizacionesScreen = () => {
  const [hospitalizations, setHospitalizations] = useState<hospitalization[]>([
    {
      clientName:"miguel",
      petName:"juan",
      phoneNumber:"2345678997",
      addmisionDate:"2024-03-04",
      exitDate:"2024-03-05",
      serviceCompleted: true,
      observations: 'hola como estas manolo'
    },
    {
      clientName:"Luna",
      petName:"fredy",
      phoneNumber:"5676849783",
      addmisionDate:"2024-03-04",
      exitDate:"2024-03-05",
      serviceCompleted:true,
      observations: 'hola como estas manolito'
    },
    {
      clientName:"Luna",
      petName:"fredy",
      phoneNumber:"5676849783",
      addmisionDate:"2024-03-04",
      exitDate:"2024-03-05",
      serviceCompleted:true,
      observations: 'hola como estas manolito'
    }
  ]);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>hospitalizaciones de {hospitalizations[0].petName}</Text>
          {hospitalizations.map((pet, index) => (
            <HospitalizationCard
              key={index}
              clientName={pet.clientName}
              petName={pet.petName}
              phoneNumber={pet.phoneNumber}
              addmisionDate={pet.addmisionDate}
              exitDate={pet.exitDate}
              serviceCompleted={pet.serviceCompleted}
              observations={pet.observations}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
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

export default HospitalizacionesScreen
