import React from "react"
import { Container, LabelBox, Label, BoxImage, Image } from "./styles"

const CardItem = ({ item }) => {
  console.log("item", item)
  return (
    <Container>
      <BoxImage>
        <Image
          //${item.item.url}
          source={require(`../../../../assets/images/fruits/strawberry.png`)}
        />
      </BoxImage>
      <LabelBox>
        <Label>{item.item.name}</Label>
      </LabelBox>
    </Container>
  )
}

export default CardItem
