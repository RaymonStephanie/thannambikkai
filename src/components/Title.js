import { View, Text, Image } from "react-native"
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
        marginLeft: "-1rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
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
  )
}
