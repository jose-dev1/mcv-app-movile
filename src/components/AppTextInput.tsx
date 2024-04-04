import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import Spaciado from "../utils/Spaciado";
import Colors from "../utils/colores";
import Font from "../utils/Fonst";
import FontSize from "../utils/FontSize";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.darkText}
      style={[
        {
          fontSize: FontSize.small,
          padding: Spaciado * 2,
          backgroundColor: Colors.lightPrimary,
          borderRadius: Spaciado,
          marginVertical: Spaciado,
          color: "black",
        },
        focused && {
          borderWidth: 3,
          borderColor: Colors.primary,
          shadowOffset: { width: 4, height: Spaciado },
          shadowColor: Colors.primary,
          shadowOpacity: 0.2,
          shadowRadius: Spaciado,
        },
      ]}
      {...otherProps}
    />
  );
};

export default AppTextInput;

const styles = StyleSheet.create({});
