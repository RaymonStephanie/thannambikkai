import colors from "../colors"
import Card from "../components/Card"
import { View, FlatList } from "react-native"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useAuth } from "../hooks/useAuth"
import EStyleSheet from "react-native-extended-stylesheet"
import { useFonts, LexendDeca_400Regular } from "@expo-google-fonts/lexend-deca"
import { vw } from "react-native-expo-viewport-units"
const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: vw(100),
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
  },
  mb1: { marginBottom: "1rem" },
})

const Home = ({ navigation: { navigate } }) => {
  const [data, setData] = useState()
  const { pending, isSignedIn } = useAuth()
  if (!pending && isSignedIn == false) navigate("Authentication")
  const [loaded] = useFonts({ LexendDeca_400Regular })
  const renderItem = ({ item, index }) => <Card data={item} key={index} />
  useEffect(() => {
    async function fetchData() {
      const r_data = []
      const querySnapshot = await getDocs(collection(db, "main_list"))
      // prettier-ignore
      querySnapshot.forEach((doc) => {
        r_data.push({ ...{ id: doc.id }, ...doc.data() })
      })
      setData(r_data)
    }
    fetchData()
  }, [])
  return !loaded ? null : (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.mb1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
export default Home
