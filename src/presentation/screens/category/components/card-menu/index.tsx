import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import Routes from "../../../../../main/navigation/routes-types"

import CardItem from "../card-item"
import { Container, FlatList } from "./styles"

interface CardMenuProps {
  marginBottom?: number
}
const CardMenu = ({ marginBottom }: CardMenuProps) => {
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

  function renderItem(item: any) {
    return <CardItem item={item} />
  }

  const navigation = useNavigation()

  return (
    <Container marginBottom={marginBottom}>
      <FlatList
        style={{ flexDirection: "column" }}
        numColumns={2}
        data={DATA}
        renderItem={(item: any) => renderItem(item)}
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  )
}

export default CardMenu
