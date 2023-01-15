import * as React from "react"
import Auth from "./src/screens/Auth"
import Home from "./src/screens/Home"
import Title from "./src/components/Title"
import { View, Text } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useAuth } from "./src/hooks/useAuth"
EStyleSheet.build()
export default function Main() {
  const Stack = createNativeStackNavigator()
  const { pending, isSignedIn } = useAuth()
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {pending ? (
            <Stack.Screen
              name="loading"
              options={{
                header: () => null,
                headerBackVisible: false,
              }}
            >
              {() => <View></View>}
            </Stack.Screen>
          ) : isSignedIn ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                header: () => <Title />,
                headerBackVisible: false,
              }}
            />
          ) : (
            <Stack.Screen
              name="Authentication"
              component={Auth}
              options={{
                header: () => <Title />,
                headerBackVisible: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
