import { LogOut } from "react-native-feather"
import { auth } from "../../firebaseConfig"
import { useNavigation } from "@react-navigation/native"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
import colors from "../colors"
export default function Title() {
  let [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View
      style={{
        backgroundColor: colors.background,
        width: "100vw",
        height: "100%",
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: "48px", height: "48px" }}
        />
        <Text
          style={{
            fontFamily: LexendDeca_400Regular,
            fontSize: "1.75rem",
            fontWeight: "700",
            marginLeft: ".5rem",
            color: colors.main[300],
          }}
        >
          Thannambikkai
        </Text>
      </View>
      <TouchableOpacity
        style={{ display: auth.currentUser ? "block" : "none" }}
        onPress={() => {
          auth.signOut()
          useNavigation().navigate("Authentication")
        }}
      >
        <LogOut color={colors.main[300]} style={{ marginRight: "0px" }} />
      </TouchableOpacity>
    </View>
  )
}
