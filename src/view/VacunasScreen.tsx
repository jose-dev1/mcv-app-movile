import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { VerVacunsApi } from '../api/api_vacuna';

interface Vacuna {
  lote_vacuna_aplicada: string;
  VacunaFechaAplicacion: string;
  fecha_vacuna_aplicada: string;
  Firma: string;
  nombre_mascota: string;
  fecha_nacimiento_mascota: string;
  genero_mascota: string;
  raza_mascota: string;
  tipo_mascota: string;
  nombre_cliente: string;
  direccion_cliente: string;
}

interface Props {
  navigation: any; // Aquí debes especificar el tipo correcto para la propiedad navigation
  route: any; // Debes especificar el tipo correcto para la propiedad route
}

const Vacunas: React.FC<Props> = ({ navigation, route }: Props) => {
  const [vacunas, setVacunas] = useState<Vacuna[]>([]); // Especifica el tipo de vacunas como un array de Vacuna

  useEffect(() => {
    const { verVacunas } = VerVacunsApi()
    const idMascota = route.params.idMascota;
    verVacunas(idMascota).then((item: Vacuna[]) => { 
      setVacunas(item);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacunas Aplicadas</Text>
      <ScrollView style={styles.scrollView}>
        {vacunas.map((vacuna, index) => (
          <View key={index} style={styles.vacunaContainer}>
            <Text style={styles.label}>Vacuna:</Text>
            <Text style={styles.info}>Lote: {vacuna.lote_vacuna_aplicada}</Text>
            <Text style={styles.info}>Fecha de Aplicación: {vacuna.fecha_vacuna_aplicada} </Text>
            <Text style={styles.label}>Información de la mascota:</Text>
            <Text style={styles.info}>Nombre: {vacuna.nombre_mascota}</Text>
            <Text style={styles.info}>Fecha de Nacimiento: {vacuna.fecha_nacimiento_mascota}</Text>
            <Text style={styles.info}>Género: {vacuna.genero_mascota}</Text>
            <Text style={styles.info}>Raza: {vacuna.raza_mascota}</Text>
            <Text style={styles.info}>Tipo: {vacuna.tipo_mascota}</Text>
            <Text style={styles.label}>Información del dueño:</Text>
            <Text style={styles.info}>Nombre: {vacuna.nombre_cliente}</Text>
            <Text style={styles.info}>Dirección: {vacuna.direccion_cliente}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    width: '100%',
  },
  vacunaContainer: {
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    marginBottom: 5,
  },
});

export default Vacunas;
