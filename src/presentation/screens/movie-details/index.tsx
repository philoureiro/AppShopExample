import React, { useEffect } from "react"
import { BackHandler, Image } from "react-native"
import { useFonts } from "expo-font"
import {
  Container,
  ImageContainer,
  InfoContainer,
  Text,
  Scroll,
  Button,
  Title,
} from "./styles"
import AppLoading from "expo-app-loading"

const MovieDetails = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true
    })
  })

  let [fontsLoaded] = useFonts({
    "Varela-Round": require("../../assets/fonts/VarelaRound-Regular.ttf"),
    "Concert-One": require("../../assets/fonts/ConcertOne-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          source={require("../../assets/images/spyder-man.jpeg")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </ImageContainer>
      {/* <Blur intensity={10}>
        <Text>OOiiiiiiiiiiiiiiiiiiiiii</Text>
      </Blur> */}
      <Scroll
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button>
          <Image
            source={require("../../assets/images/play.png")}
            style={{ height: 120, width: 120 }}
          />
        </Button>
        <InfoContainer intensity={100} tint="dark">
          <Title>Spyder Man: No Way Home</Title>
          <Text>3 Seasons</Text>
          <Button>
            <Image
              source={require("../../assets/images/play.png")}
              style={{ height: 120, width: 120 }}
            />
          </Button>
          <Button>
            <Image
              source={require("../../assets/images/play.png")}
              style={{ height: 120, width: 120 }}
            />
          </Button>
          <Button>
            <Image
              source={require("../../assets/images/play.png")}
              style={{ height: 120, width: 120 }}
            />
          </Button>
        </InfoContainer>
      </Scroll>
    </Container>
  )
}

export default MovieDetails
