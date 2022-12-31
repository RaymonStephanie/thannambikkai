import colors from "./colors"
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: colors.background
  },
  title_cont: {
    backgroundColor: colors.darkBlue,
    padding: "0.3rem 0.5rem"
  },
  title: {
    color: colors.darkBlue,
    fontSize: "1.5rem",
    // fontFamily: "Inter_700Bold"
  },
  button: {
    backgroundColor: colors.bgdark,
    width: "max-content",
    padding: "0.5rem 0.3rem",
    color: colors.lightRed
  }
})