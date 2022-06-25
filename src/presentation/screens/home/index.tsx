import React, { useEffect } from "react"
import { BackHandler, Image, TouchableOpacity } from "react-native"
import { BackgroundPage, SearchBar } from "../../components"
import { Container, Text } from "./styles"
import CardMenu from "./components/card-menu"
import SpecialDay from "../../assets/offers/special-day.png"
import BlackFriday from "../../assets/offers/black-friday.jpg"
import { Center, ScrollView } from "native-base"

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
        <CardMenu title="Categories" />
        <ScrollView
          horizontal
          centerContent
          style={{
            paddingBottom: 10,
            paddingTop: 10,
            marginBottom: 20,
            // backgroundColor: "red",
          }}
        >
          <TouchableOpacity>
            <Image
              source={SpecialDay}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={BlackFriday}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
        </ScrollView>

        <CardMenu title="Popular Deals" />
      </BackgroundPage>
    </Container>
  )
}

export default Dashboard
