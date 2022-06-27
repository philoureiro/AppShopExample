import React, { useEffect } from "react"
import { BackHandler, Image, TouchableOpacity } from "react-native"
import { DefaultScreen, SearchBar } from "../../components"
import { Container } from "./styles"
import CardMenu from "./components/card-menu"
import { ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import Routes from "../../../main/navigation/routes-types"

const Dashboard = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })

  const navigation = useNavigation()
  return (
    <Container>
      <SearchBar />
      <DefaultScreen namePage="Home" scroollable>
        <CardMenu title="Categories" />
        <ScrollView
          horizontal
          centerContent
          style={{
            paddingBottom: 10,
            paddingTop: 10,
            minHeight: 160,
            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Offer)}>
            <Image
              source={require("../../assets/offers/special-day.png")}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate(Routes.Offer)}>
            <Image
              source={require("../../assets/offers/black-friday.jpg")}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Offer)}>
            <Image
              source={require("../../assets/offers/black-friday3.jpg")}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Offer)}>
            <Image
              source={require("../../assets/offers/black-friday2.jpg")}
              style={{
                height: 120,
                width: 250,
                borderRadius: 25,
              }}
            />
          </TouchableOpacity>
        </ScrollView>

        <CardMenu title="Popular Deals" marginBottom={200} />
      </DefaultScreen>
    </Container>
  )
}

export default Dashboard
