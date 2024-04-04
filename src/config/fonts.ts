import * as Font from "expo-font";

const fontMap = {
  "poppins-regular": require("../../assets/fonts/Poppins-Bold.ttf"),
  "poppins-bold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  "poppins-semiBold": require("../../assets/fonts/Poppins-Regular.ttf"),
};

const loadFonts = async () => {
  await Font.loadAsync(fontMap);
};

export default loadFonts;
