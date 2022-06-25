import { NativeBaseProvider } from "native-base"
import React, { useEffect, useState } from "react"
import Routes from "./src/routes"
import AppLoading from "expo-app-loading"

import { useFonts } from "expo-font"

export default function App() {
  const [loaded] = useFonts({
    "Teko-Bold": require("./src/presentation/assets/fonts/Teko-Bold.ttf"),
    "Teko-Light": require("./src/presentation/assets/fonts/Teko-Light.ttf"),
    "Teko-Medium": require("./src/presentation/assets/fonts/Teko-Medium.ttf"),
    "Teko-Regular": require("./src/presentation/assets/fonts/Teko-Regular.ttf"),
    "Teko-SemiBold": require("./src/presentation/assets/fonts/Teko-SemiBold.ttf"),
  })

  if (!loaded) {
    return <AppLoading />
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  )
}
