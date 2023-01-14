import colors from "../colors"
import { auth } from "../../firebaseConfig"
import { LogOut } from "react-native-feather"
import { vw } from "react-native-expo-viewport-units"
import { useNavigation } from "@react-navigation/native"
import EStyleSheet from "react-native-extended-stylesheet"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: vw(100),
    height: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "LexendDeca_400Regular",
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: ".5rem",
    color: colors.main[300],
  },
})
export default function Title() {
  let [loaded] = useFonts({ LexendDeca_400Regular })
  if (!loaded) return null
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 48, height: 48 }}
        />
        <Text style={styles.text}>Thannambikkai</Text>
      </View>
      <TouchableOpacity
        style={{ display: auth.currentUser ? "block" : "none" }}
        onPress={() => {
          auth.signOut()
          useNavigation().navigate("Authentication")
        }}
      >
        <LogOut color={colors.main[300]} />
      </TouchableOpacity>
    </View>
  )
}
