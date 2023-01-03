import colors from "../colors"
import { View, Text, Image } from "react-native"
import { PhoneCall, MapPin } from "react-native-feather"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"

export default function Card({
  data: { id, name, contact, address, img_url, city, district, state },
}) {
  const [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View
      style={{
        backgroundColor: colors.main[100] + "50",
        width: "90vw",
        alignSelf: "center",
        height: "max-content",
        borderRadius: "8px",
        marginTop: ".5rem",
      }}
    >
      <Image
        source={img_url}
        style={{
          width: "80vw",
          height: img_url == "" ? "0vh" : "30vh",
          resizeMode: "contain",
          marginTop: ".5rem",
          alignSelf: "center",
        }}
      />
      <View style={{ padding: "1rem" }}>
        <Text style={[lex, { fontSize: "1.5rem", fontWeight: "700" }]}>
          {name}
        </Text>
        <Text
          style={[
            lex,
            {
              fontSize: "1.3rem",
              fontWeight: "700",
            },
          ]}
        >
          <PhoneCall
            style={{
              marginRight: "10px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
          {contact}
        </Text>
        <Text style={[lex, { fontSize: "1.3rem" }]}>
          <MapPin
            style={{
              marginRight: "10px",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          />
          {address}
        </Text>
        <Text style={[lex, { fontSize: "1.3rem", fontWeight: "700" }]}>
          {city == district
            ? `${district}, ${state}`
            : `${city}, ${district}, ${state}`}
        </Text>
      </View>
    </View>
  )
}

const lex = {
  fontFamily: LexendDeca_400Regular,
  color: colors.main[300],
  marginTop: "5px",
}
