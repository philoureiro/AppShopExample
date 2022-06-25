import React from "react"
import { TouchableOpacity, Text } from "react-native"
import CardItem from "../card-item"
import {
  Container,
  Row,
  Label,
  LabelBox,
  SeeAllLabel,
  CardHeader,
  FlatList,
} from "./styles"

interface CardMenuProps {
  title: string
}
const CardMenu = ({ title }: CardMenuProps) => {
  const DATA = [
    {
      id: "1",
      name: "Apple",
      url: "apple.png",
    },
    {
      id: "2",
      name: "Avocado",
      url: "avocado.png",
    },
    {
      id: "3",
      name: "Banana",
      url: "banana.png",
    },
    {
      id: "4",
      name: "Blackberry",
      url: "blackberry.png",
    },
    {
      id: "5",
      name: "Cherry",
      url: "cherry.png",
    },
    {
      id: "6",
      name: "Dates",
      url: "dates.png",
    },
    {
      id: "7",
      name: "Grape",
      url: "grape.png",
    },
    {
      id: "8",
      name: "Green Lemon",
      url: "green-lemon.png",
    },
    {
      id: "9",
      name: "Guava",
      url: "guava.png",
    },
    {
      id: "10",
      name: "Kiwi",
      url: "kiwi.png",
    },
  ]

  function renderItem(item) {
    return <CardItem item={item} />
  }

  return (
    <Container>
      <CardHeader>
        <LabelBox>
          <Label>{title}</Label>
          <TouchableOpacity>
            <SeeAllLabel>See All</SeeAllLabel>
          </TouchableOpacity>
        </LabelBox>
        <Row />
      </CardHeader>
      <FlatList
        data={DATA}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </Container>
  )
}

export default CardMenu
