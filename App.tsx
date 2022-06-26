import { NativeBaseProvider } from "native-base"
import React from "react"
import { LogBox } from "react-native"
import Routes from "./src/main/navigation/routes"

LogBox.ignoreLogs(["NativeBase:"])

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  )
}
