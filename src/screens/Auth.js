import { useState, useEffect } from "react"
// import { auth as fauth } from "../../firebaseConfig"
import { useAuth } from "../hooks/useAuth"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native"
import { Alert, View } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import colors from "../colors"

const Auth = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { pending, isSignedIn, user, auth } = useAuth()
  if (!pending && isSignedIn) navigate("Home")
  const signInWithEmail = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        Alert.alert(err.message)
      })
      .then(() => navigate("Home"))
  }
  const signUpWithEmail = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        Alert.alert(err.message)
      })
      .then(() => navigate("Home"))
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
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
          />
          <Input
            secure={true}
            placeholder="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            spellCheck={false}
            autoCorrect={false}
          />
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
          <Button onPress={() => signUpWithEmail()} contents="Sign up" />
          <Button onPress={() => signInWithEmail()} contents="Sign in" />
        </View>
      </View>
    </View>
  )
}

export default Auth
