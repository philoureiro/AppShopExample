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

import FoodBackground from "../../assets/images/food-background.png"
import ProfilePic from "../../assets/images/profile.jpg"
LogBox.ignoreLogs(["NativeBase:"])

const SearchBar = () => {
  return (
    <Container>
      <BackGroundImage source={FoodBackground} />

      <TextBox>
        <View>
          <Label>Hey Philipe 🧑🏽‍💻</Label>
          <Label marginTop="5px">Lets search your grocery food.</Label>
        </View>

        <BoxImage>
          <ProfileImage source={ProfilePic} />
        </BoxImage>
      </TextBox>

      <BoxInput>
        <Ionicons
          name="search"
          size={28}
          color={theme.colors.gray}
          style={{ marginRight: 10 }}
        />
        <Input
          placeholder="Search"
          placeholderTextColor="gray"
          autoCapitalize="none"
        />
      </BoxInput>
    </Container>
  )
}

export default SearchBar
