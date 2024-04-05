import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import HospitalizationCard from '../components/HospitalizationCard';
import { VerHospitalizaciones } from '../api/get_hosspitalizaciones';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../stacks/homeStacksScreen';

interface hospitalization{
  primer_nombre_cliente: string,
  telefono_cliente: string;
  fecha_hospitalizacion: string;
  fecha_salida_hospitalizacion: string;
  servicio_finalizado_hospitalizacion: number;
  contenido_hospitalizacion: string
}

interface Props extends StackScreenProps<HomeStackParamList,'Servicios'> { }

const HospitalizacionesScreen = ({navigation,route}:Props) => {
  const [hospitalizations, setHospitalizations] = useState<hospitalization[]>([]);

  useEffect(()=>{
    const {verHospitalizaciones} = VerHospitalizaciones()
    const { idMascota } = route.params
    verHospitalizaciones(idMascota).then((result) => {
      console.log(result)
      setHospitalizations(result)
    })
  },[])

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          {hospitalizations.map((pet, index) => (
            <HospitalizationCard
              key={index}
              primer_nombre_cliente={pet.primer_nombre_cliente}
              telefono_cliente={pet.telefono_cliente}
              fecha_hospitalizacion={pet.fecha_hospitalizacion}
              fecha_salida_hospitalizacion={pet.fecha_salida_hospitalizacion}
              servicio_finalizado_hospitalizacion={pet.servicio_finalizado_hospitalizacion}
              contenido_hospitalizacion={pet.contenido_hospitalizacion}
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
