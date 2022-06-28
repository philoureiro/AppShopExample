import { useNavigation } from "@react-navigation/native"
import React from "react"
import Routes from "../../../../../main/navigation/routes-types"
import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

interface CardItemProps {
  item: any
  title: string
}
const CardItem = ({ item, title }: CardItemProps) => {
  const navigation = useNavigation()
  return (
    <Container>
      <BoxImage
        onPress={() =>
          navigation.navigate(
            title === Routes.Categories ? Routes.Category : Routes.Product,
            { item: item }
          )
        }
      >
        <Image
          //${item.item.url}
          source={{
            uri: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          }}
        />
      </BoxImage>
      <LabelBox>
        <Label>{item.item.name}</Label>
      </LabelBox>
    </Container>
  )
}

export default CardItem
