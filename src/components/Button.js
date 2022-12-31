import colors from "../colors";
import { styles } from "../styles";
import { TouchableOpacity } from "react-native";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";

export default function CButton(props) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });
  if (!fontsLoaded) return null;
  const { state, text, onPress } = props;
  return (
    <TouchableOpacity style={{
      backgroundColor: colors.bgdark,
      padding: "0.5rem",
      borderRadius: "5px",
      width: "max-content",
      color: colors.lightBlue
    }}>{text}</TouchableOpacity>
  )
}