import { NativeBaseProvider } from "native-base"
import React, { useEffect } from "react"
import Routes from "./src/routes"
import AppLoading from "expo-app-loading"

import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light,
} from "@expo-google-fonts/roboto"

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_300Light,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  )
}
