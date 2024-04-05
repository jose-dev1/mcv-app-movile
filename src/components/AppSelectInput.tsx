import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Spaciado from "../utils/Spaciado";
import Colors from "../utils/colores";
import Font from "../utils/Fonst";
import FontSize from "../utils/FontSize";
import { ConectionData } from "../api/api_rest_datos";
import axios from "axios";

interface CustomSelectProps {
  onGenreChange: (genre: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ onGenreChange }) => {
  const [genres, setGenres] = useState<{ id_genero: string; genero: string }[]>(
    []
  );
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await ConectionData();
        const genero = response.dataGenero();
        setGenres(await genero);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <View>
      <RNPickerSelect
        style={{
          inputIOS: {
            fontSize: FontSize.small,
            padding: Spaciado * 2,
            backgroundColor: Colors.lightPrimary,
            borderRadius: Spaciado,
            marginVertical: Spaciado,
            color: "black",
          },
          inputAndroid: {
            fontSize: FontSize.small,
            padding: Spaciado * 2,
            backgroundColor: Colors.lightPrimary,
            borderRadius: Spaciado,
            marginVertical: Spaciado,
            color: "black",
          },
          iconContainer: {
            top: 20,
            right: 10,
          },
        }}
        value={selectedGenre}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedGenre(itemValue);
          onGenreChange(itemValue);
        }}
        items={genres.map((genre) => ({
          label: genre.genero,
          value: genre.id_genero,
        }))}
      />
    </View>
  );
};

export default CustomSelect;
