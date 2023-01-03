import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { auth } from "../../firebaseConfig"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/react-native"
import { Alert, View } from "react-native"
import Input from "../components/Input"
import Button from "../components/Button"
import colors from "../colors"
import EStyleSheet from "react-native-extended-stylesheet"
const styles = EStyleSheet.create({
  container: {
    backgroundColor: colors.background,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  innerContainer: {
    display: "flex",
    height: "50%",
    width: "90vw",
    padding: ".5rem",
    alignSelf: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: "2rem",
    justifyContent: "space-evenly",
  },
})

const Auth = ({ navigation: { navigate } }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { pending, isSignedIn, user } = useAuth()
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
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input
            secure={true}
            placeholder="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            autoCorrect={false}
            spellCheck={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => signUpWithEmail()} contents="Sign up" />
          <Button onPress={() => signInWithEmail()} contents="Sign in" />
        </View>
      </View>
    </View>
  )
}

export default Auth
