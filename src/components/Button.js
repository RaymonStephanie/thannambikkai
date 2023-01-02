import colors from "../colors"
import { TouchableOpacity, View, Text } from "react-native"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
export default function Button({ onPress, contents, disabled }) {
  let [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: disabled
            ? colors.main[100] + "75"
            : colors.main[100],
          padding: ".65rem",
          paddingHorizontal: "1rem",
          width: "max-content",
          borderRadius: "13px",
        }}
        onPress={onPress}
      >
        <Text
          style={{
            fontFamily: LexendDeca_400Regular,
            fontSize: "1rem",
            fontWeight: "700",
            color: disabled ? colors.background + "75" : colors.background,
          }}
        >
          {contents}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
