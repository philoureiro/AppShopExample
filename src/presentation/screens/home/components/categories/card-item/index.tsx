import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Category } from "../../../../../../interfaces/models/Category"
import Routes from "../../../../../../main/navigation/routes-types"

import { returnImageCategory } from "../../../../../../utils/returnCategoryImage"

import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

interface CardItemProps {
  item: Category
}
const CardItem = ({ item }: CardItemProps) => {
  const navigation = useNavigation()
  return (
    <Container>
      <BoxImage
        onPress={() => navigation.navigate(Routes.Category, { item: item })}
      >
        <Image source={returnImageCategory(item)} />
      </BoxImage>
      <LabelBox>
        <Label>{item}</Label>
      </LabelBox>
    </Container>
  )
}

export default CardItem
