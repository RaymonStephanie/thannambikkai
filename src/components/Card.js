import colors from "../colors"
// import Carousel from "react-native-snap-carousel"
import { View, Text, Image } from "react-native"
import { PhoneCall, MapPin } from "react-native-feather"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
import { FlatList } from "react-native-web"

export default function Card({
  data: { id, name, contact, address, img_url, city, district, state },
}) {
  const [loaded] = useFonts({ LexendDeca_400Regular })
  return !loaded ? null : (
    <View
      style={{
        backgroundColor: colors.main[100] + "50",
        width: "90%",
        height: "100vh",
        alignSelf: "center",
        height: "max-content",
        borderRadius: "15px",
      }}
    >
      {[img_url[1]].forEach((img, index) => {
        console.log({ uri: img })
        return (
          <Image
            source={{ uri: img }}
            style={{
              width: "100%",
              height: "50%",
              // resizeMode: "cover",
              // borderTopLeftRadius: "15px",
              // borderTopRightRadius: "15px",
            }}
            key={index}
          />
        )
      })}
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
