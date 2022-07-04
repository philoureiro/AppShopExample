import { NativeBaseProvider } from "native-base"
import React from "react"
import { LogBox } from "react-native"
import { AuthProvider } from "./src/application/contexts/Auth/Auth"
import { CartProvider } from "./src/application/contexts/Cart/Cart"
import Routes from "./src/application/navigation/routes"

LogBox.ignoreLogs(["NativeBase:"])

export default function App() {
  // console.disableYellowBox = true
  return (
    <NativeBaseProvider>
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </NativeBaseProvider>
  )
}
