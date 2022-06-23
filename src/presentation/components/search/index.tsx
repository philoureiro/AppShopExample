import { Image, LogBox } from "react-native"
import React from "react"
import { BackGroundImage, Container, TextBox, Label } from "./styles"
import { Input, View } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import { theme } from "../../styles/theme"

LogBox.ignoreLogs(["NativeBase:"])

const SearchBar = () => {
  return (
    <Container>
      <BackGroundImage
        source={require("../../assets/images/food-background.png")}
      />

      <TextBox>
        <View>
          <Label>Hey Philipe 🧑🏽‍💻</Label>
          <Label marginTop="5px">Lets search your grocery food.</Label>
        </View>

        <Image
          source={require("../../assets/images/profile.jpg")}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            backgroundColor: "red",
          }}
        />
      </TextBox>

      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        height="20%"
        borderRadius="10"
        borderWidth="0"
        autoCapitalize="none"
        InputLeftElement={
          <Ionicons
            name="search"
            size={28}
            color={theme.colors.gray}
            style={{ marginLeft: 10 }}
          />
        }
      />
    </Container>
  )
}

export default SearchBar
