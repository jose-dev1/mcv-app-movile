import React, { useState, useEffect } from "react";
import { LocalStorage } from "../utils/LocalStorage";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
  StyleSheet,
} from "react-native";
import { GET_EXAMEN } from "../api/api_rest_examen";
import { DESCARGA_EXAMEN } from "../api/api_rest_examen";
import { Feather } from "@expo/vector-icons";

interface Examen {
  id: string;
  nombre_mascota: string;
  tipo_examen: string;
  registro_completo_examen: number;
  fecha_toma_muestra_examen: string;
  link_archivo_examen: string | null;
}

export default function Descargas() {
  const [examenData, setExamenData] = useState<Examen[]>([]);

  useEffect(() => {
    const { getItem } = LocalStorage();
    getItem("client")
      .then((item) => {
        const data = JSON.parse(item as any);
        return GET_EXAMEN().getExamenbyId(data.id);
      })
      .then((examen) => {
        setExamenData(examen);
      })
      .catch((error) => {
        console.log("Error al obtener el examen:", error);
      });
  }, []);

  const handleDownload = async (examenId: any) => {
    try {
      console.log(examenId);
      const { descargaExamen } = DESCARGA_EXAMEN();
      const response = await descargaExamen(examenId);
      if (response.link_archivo_examen) {
        await Linking.openURL(response.link_archivo_examen);
        Alert.alert("Éxito", "Examen descargado con éxito");
      } else {
        Alert.alert("Alerta", "No hay ningun archivo cargado para este examen");
      }
    } catch (error) {
      Alert.alert("Error", "Error al descargar el examen");
      console.log(error);
    }
  };

  const renderExamenCards = () => {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {examenData.map((examen, index) => (
          <View key={index} style={styles.section}>
            <Text>Mascota: {examen.nombre_mascota}</Text>
            <Text>Tipo de Examen: {examen.tipo_examen}</Text>
            <Text>
              Estado del Examen:{" "}
              {examen.registro_completo_examen === 0
                ? "Examen sin terminar"
                : "Examen terminado"}
            </Text>
            <Text>Fecha: {examen.fecha_toma_muestra_examen.split("T")[0]}</Text>
            <TouchableOpacity
              style={styles.downloadButton}
              onPress={() => handleDownload(examen.id)}
            >
              <Feather name="download" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi can veterinaria</Text>
        <Text style={styles.subtitle}>
          ¡Cuida a tus mascotas como se merecen!
        </Text>
      </View>
      {renderExamenCards()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#3a0ca3",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    position: "relative",
  },
  downloadButton: {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: [{ translateX: 140 }, { translateY: -20 }],
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
  },
});
