import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ServiceCard from '../components/ServiceCard';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from '../stacks/homeStacksScreen';
import { ConectionServices } from '../api/conection_servicios';

interface Props extends StackScreenProps<HomeStackParamList,'Servicios'> { }

const ServiciosScreen = ({navigation,route}:Props) => {

  const [services, setServices] = useState([])
  useEffect(()=>{
    const {getServices} = ConectionServices()
    const {idMascota} = route.params
    getServices(idMascota).then((item)=>{
      setServices(item)
    })
  },[])

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          {services.map((pet:{descripcion_servicio:string;fecha_registro_historia_clinica:string;registro_historia_clinica_finalizado:number;descripcion_registro_historia_clinica:string}, index) => (
            <ServiceCard
              key={index}
              descripcion_servicio={pet.descripcion_servicio}
              fecha_registro_historia_clinica={pet.fecha_registro_historia_clinica}
              registro_historia_clinica_finalizado={pet.registro_historia_clinica_finalizado}
              descripcion_registro_historia_clinica={pet.descripcion_registro_historia_clinica}
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
    paddingTop:10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ServiciosScreen
