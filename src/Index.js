import * as React from 'react';
import Title from "./components/Title"
import Input from "./components/Input"
import CButton from "./components/Button"
import { Text, View, } from 'react-native';
import { styles as cstyles } from "./styles"
export default function App() {
  return (
    <View style={cstyles.container}>
      <Title />
      <View style={{margin: "3rem"}}>
        <Input />
        <CButton state="disabled" text="Sign Up" />
        <CButton state="disabled" text="Sign In" />
      </View>
    </View>
  );
}