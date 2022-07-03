import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ActivityIndicator, TouchableOpacity } from "react-native"
import { IGetProducts } from "../../../../../../domain/usecases/interfaces/category/getProducts"
import { Category } from "../../../../../../interfaces/models/Category"
import { Product } from "../../../../../../interfaces/models/Product"
import Routes from "../../../../../../main/navigation/routes-types"

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
  getData: IGetProducts
}
const CardMenu = ({ title, marginBottom, getData }: CardMenuProps) => {
  const [data, setData] = useState<Product[]>()
  const [loading, setLoading] = useState(false)

  function renderItem(item: Category) {
    return <CardItem item={item} />
  }

  const navigation = useNavigation()

  const makeRequest = async () => {
    setLoading(true)
    setData(await getData.get())
    setLoading(false)
  }

  useEffect(() => {
    makeRequest()
  }, [getData])

  return (
    <Container marginBottom={marginBottom}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <CardHeader>
            <LabelBox>
              <Label>{title}</Label>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(Routes.PopularDeals, { products: data })
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
        </>
      )}
    </Container>
  )
}

export default CardMenu
