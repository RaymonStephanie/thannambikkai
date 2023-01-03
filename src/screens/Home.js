import colors from "../colors"
import Card from "../components/Card"
import { View, Text, FlatList } from "react-native"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebaseConfig"
import { useAuth } from "../hooks/useAuth"
const Home = ({ navigation: { navigate } }) => {
  const [data, setData] = useState()
  const { pending, isSignedIn } = useAuth()
  if (!pending && isSignedIn == false) navigate("Authentication")
  const renderItem = ({ item, index, separators }) => {
    return <Card data={item} key={index} />
  }
  useEffect(() => {
    async function fetchData() {
      const r_data = []
      const querySnapshot = await getDocs(collection(db, "main_list"))
      // prettier-ignore
      querySnapshot.forEach((doc) => r_data.push({ ...{ id: doc.id }, ...doc.data() }))
      setData(r_data)
    }
    fetchData()
  }, [])
  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: "100vw",
        height: "100%",
        display: "flex",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <FlatList data={data} renderItem={renderItem} />
    </View>
  )
}
export default Home
