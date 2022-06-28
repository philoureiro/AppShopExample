import { useNavigation } from "@react-navigation/native"
import React from "react"
import Routes from "../../../../../main/navigation/routes-types"
import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

interface CardItemProps {
  item: any
}
const CardItem = ({ item }: CardItemProps) => {
  const navigation = useNavigation()
  return (
    <Container>
      <BoxImage
        onPress={() => navigation.navigate(Routes.Category, { item: item })}
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
