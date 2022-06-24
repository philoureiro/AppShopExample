import React, { useEffect } from "react"
import { BackHandler, Image } from "react-native"
import { BackgroundPage, SearchBar } from "../../components"
import { Container, Text } from "./styles"
import CategoriesCard from "../home/components/categories-card"
const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })
  return (
    <Container>
      <SearchBar />
      <BackgroundPage>
        <CategoriesCard />
      </BackgroundPage>
    </Container>
  )
}

export default Dashboard
