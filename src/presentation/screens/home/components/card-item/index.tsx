import React from "react"
import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

interface CardItemProps {
  item: any
}
const CardItem = ({ item }: CardItemProps) => {
  return (
    <Container>
      <BoxImage>
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
