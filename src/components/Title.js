import colors from "../colors"
import { useEffect } from "react"
import { auth } from "../../firebaseConfig"
import { LogOut } from "react-native-feather"
import { vw } from "react-native-expo-viewport-units"
import { useNavigation } from "@react-navigation/native"
// import { useAuth } from "../hooks/useAuth"
import EStyleSheet from "react-native-extended-stylesheet"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { View, Text, Image, TouchableOpacity } from "react-native"

// import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
export default function Title() {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left + 10,
          paddingRight: insets.right + 10,
        },
      ]}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/internal.png")}
          style={{ width: 48, height: 48 }}
        />
        <Text style={styles.text}>Thannambikkai</Text>
      </View>
      <TouchableOpacity
        style={{ display: auth.currentUser ? "block" : "none" }}
        onPress={() => {
          // useNavigation().navigate("Authentication")
          auth.signOut()
        }}
      >
        <LogOut color={colors.main[300]} />
      </TouchableOpacity>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: vw(100),
    // height: "10%",
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
    // fontFamily: "LexendDeca_400Regular",
    fontSize: "1.75rem",
    fontWeight: "700",
    marginLeft: ".5rem",
    color: colors.main[300],
  },
})
