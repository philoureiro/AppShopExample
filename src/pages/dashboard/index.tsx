import React, { useEffect } from "react"
import { BackHandler, Image } from "react-native"
import { Container, Text } from "./styles"

const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })
  return (
    <Container>
      <Image
        source={require("../../assets/spyder-man.jpeg")}
        resizeMode="cover"
      />
    </Container>
  )
}

export default Dashboard
