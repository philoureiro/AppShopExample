import React, { useEffect } from "react"
import { BackHandler, Image } from "react-native"
import { SearchBar } from "../../components"
import { Container, Text } from "./styles"

const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })
  return (
    <Container>
      <SearchBar />
    </Container>
  )
}

export default Dashboard
