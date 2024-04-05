import React, { useState, useEffect } from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Spaciado from "../utils/Spaciado";
import Colors from "../utils/colores";
import FontSize from "../utils/FontSize";
import { DataTypeDoc } from "../api/api_rest_datos";
import axios from "axios";

interface CustomSelectProps {
  onDocumentTypeChange: (
    documentType: string,
    documentDescription: string
  ) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  onDocumentTypeChange,
}) => {
  const [documentTypes, setDocumentTypes] = useState<
    { id_tipo_documento: string; descripcion_documento: string }[]
  >([]);
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");

  useEffect(() => {
    const fetchDocumentTypes = async () => {
      try {
        const response = await DataTypeDoc();
        const documentosTypes = response.dataDoc();
        setDocumentTypes(await documentosTypes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDocumentTypes();
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
        value={selectedDocumentType}
        onValueChange={(itemValue, itemIndex) => {
          const selectedDocumentTypeInfo = documentTypes.find(
            (documentType) => documentType.id_tipo_documento === itemValue
          );
          setSelectedDocumentType(itemValue);
          if (selectedDocumentTypeInfo) {
            onDocumentTypeChange(
              selectedDocumentTypeInfo.id_tipo_documento,
              selectedDocumentTypeInfo.descripcion_documento
            );
          }
        }}
        items={documentTypes.map((documentType) => ({
          label: documentType.descripcion_documento,
          value: documentType.id_tipo_documento,
        }))}
      />
    </View>
  );
};

export default CustomSelect;
