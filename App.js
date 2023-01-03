import * as React from "react"
import Auth from "./src/screens/Auth"
import Home from "./src/screens/Home"
import Title from "./src/components/Title"
import EStyleSheet from "react-native-extended-stylesheet"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
EStyleSheet.build()
export default function Main() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={Auth}
          options={{
            header: () => <Title />,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerBackVisible: false,
            header: () => <Title />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
