import { useState } from "react"
import { auth } from "../../firebaseConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native"
import { Alert, StyleSheet, View } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import colors from "../colors"

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const signInWithEmail = async () => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      Alert.alert(err.message)
      console.log(err.message)
    })
    setLoading(false)
  }
  const signUpWithEmail = async () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      Alert.alert(err.message)
    })
    setLoading(false)
  }
  return (
    <View
      style={{
        backgroundColor: colors.background,
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          height: "50%",
          width: "90vw",
          padding: ".5rem",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Input placeholder="Email" />
          <Input placeholder="Password" secure={true} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            marginTop: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            onPress={() => signUpWithEmail()}
            contents="Sign up"
            disabled={loading}
          />
          <Button
            onPress={() => signInWithEmail()}
            contents="Sign in"
            disabled={loading}
          />
        </View>
      </View>
    </View>
  )
}

export default Auth
