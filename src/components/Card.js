import colors from "../colors"
import { View, Text, Image } from "react-native"
import { PhoneCall, MapPin } from "react-native-feather"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
import EStyleSheet from "react-native-extended-stylesheet"
import { useState } from "react"

const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.main[100] + "50",
    width: "90vw",
    alignSelf: "center",
    height: "max-content",
    borderRadius: "8px",
    marginTop: ".5rem",
  },
  image: {
    width: "80vw",
    height: `30vh`,
    resizeMode: "contain",
    marginTop: ".5rem",
    alignSelf: "center",
  },
  hidden: { visibility: "hidden" },
  p1r: { padding: "1rem" },
  lex: {
    fontFamily: "LexendDeca_400Regular",
    color: colors.main[300],
    marginTop: "5px",
  },
  fs3r: { fontSize: "1.3rem" },
  fs5r: { fontSize: "1.5rem" },
  bold: { fontWeight: "700" },
  icon: {
    marginRight: "10px",
    marginTop: "auto",
    marginBottom: "auto",
  },
})
export default function Card({
  data: { id, name, contact, address, img_url, city, district, state },
}) {
  const [loaded] = useFonts({ LexendDeca_400Regular })
  const [imgload, setimgload] = useState(false)
  return !loaded ? null : (
    <View style={styles.container}>
      <Image
        source={img_url}
        style={imgload ? styles.image : styles.hidden}
        onLoad={() => setimgload(true)}
      />
      <View style={styles.p1r}>
        <Text style={[styles.lex, styles.fs5r, styles.bold]}>{name}</Text>
        <Text style={[styles.lex, styles.fs3r, styles.bold]}>
          <PhoneCall style={styles.icon} />
          {contact}
        </Text>
        <Text style={[styles.lex, styles.fs3r]}>
          <MapPin style={styles.icon} />
          {address}
        </Text>
        <Text style={[styles.lex, styles.fs3r, styles.bold]}>
          {city == district
            ? `${district}, ${state}`
            : `${city}, ${district}, ${state}`}
        </Text>
      </View>
    </View>
  )
}
