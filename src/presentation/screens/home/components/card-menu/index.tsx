import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

import { IGetCategories } from "../../../../../domain/usecases/interfaces/category/getCategories"

import { Category } from "../../../../../interfaces/models/Category"
import Routes from "../../../../../main/navigation/routes-types"

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
  marginBottom?: number
  getCategories: IGetCategories
}
const CardMenu = ({ title, marginBottom, getCategories }: CardMenuProps) => {
  const [data, setData] = useState<Category[]>()

  function renderItem(item: Category) {
    return <CardItem item={item} title={title} />
  }

  const navigation = useNavigation()

  const makeRequest = async () => {
    setData(await getCategories.get())
  }

  useEffect(() => {
    makeRequest()
  }, [getCategories])

  return (
    <Container marginBottom={marginBottom}>
      <CardHeader>
        <LabelBox>
          <Label>{title}</Label>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                title === Routes.Categories
                  ? Routes.Categories
                  : Routes.PopularDeals
              )
            }
          >
            <SeeAllLabel>See All</SeeAllLabel>
          </TouchableOpacity>
        </LabelBox>
        <Row />
      </CardHeader>
      <FlatList
        data={data}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: Category) => item}
        horizontal
      />
    </Container>
  )
}

export default CardMenu
