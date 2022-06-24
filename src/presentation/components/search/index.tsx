import { Image, LogBox } from "react-native"
import React from "react"
import {
  BackGroundImage,
  Container,
  TextBox,
  Label,
  Input,
  BoxInput,
  ProfileImage,
  BoxImage,
} from "./styles"
import { View } from "native-base"
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

        <BoxImage>
          <ProfileImage source={require("../../assets/images/profile.jpg")} />
        </BoxImage>
      </TextBox>

      <BoxInput>
        <Ionicons
          name="search"
          size={28}
          color={theme.colors.gray}
          style={{ marginRight: 10 }}
        />
        <Input placeholder="Search" autoCapitalize="none" />
      </BoxInput>
    </Container>
  )
}

export default SearchBar
