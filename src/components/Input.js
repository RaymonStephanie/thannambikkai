import { useState } from "react"
import colors from "../colors"
import { TextInput, TouchableOpacity, View } from "react-native"
import { LexendDeca_400Regular, useFonts } from "@expo-google-fonts/lexend-deca"
import { EyeOff } from "react-native-feather"
export default function Input(props) {
  const loaded = useFonts({ LexendDeca_400Regular })
  const [sec, setsec] = useState(props.secure)
  return !loaded ? null : (
    <View
      style={{
        backgroundColor: colors.blue,
        borderRadius: "8px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: ".5rem",
        marginBottom: "5px",
        alignItems: "center",
      }}
    >
      <TextInput
        style={{
          color: colors.main[300],
          fontFamily: LexendDeca_400Regular,
          fontSize: "1.25rem",
          outline: "none",
        }}
        {...props}
        secureTextEntry={sec}
      />
      {props.secure ? (
        <TouchableOpacity
          onPress={() => {
            setsec(!sec)
          }}
        >
          <EyeOff
            style={{
              width: "24px",
              height: "24px",
            }}
            color={colors.main[300]}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
