// https://coolors.co/palette/2b2d42-8d99ae-edf2f4-ef233c-d90429
import { styles } from "../styles";
import colors from "../colors"
import { View, Text, StyleSheet } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
export default function Title() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });
  if (!fontsLoaded) return null;
  return (
      <View style={styles.title_cont}>
        <Text style={{ fontFamily: Inter_700Bold, color: colors.lightBlue, fontSize: "1.5rem", fontWeight: "700" }}>Thannambikkai</Text>
      </View>
  )
}