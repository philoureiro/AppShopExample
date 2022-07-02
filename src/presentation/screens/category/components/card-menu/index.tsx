import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { IGetProductsByCategory } from "../../../../../domain/usecases/interfaces/category/getProductsByCategory"
import { Product } from "../../../../../interfaces/models/Product"
import Routes from "../../../../../main/navigation/routes-types"

import CardItem from "../card-item"
import { Container, FlatList } from "./styles"

interface CardMenuProps {
  marginBottom?: number
  getProductsByCategory: IGetProductsByCategory
  category: string
}
const CardMenu = ({
  marginBottom,
  getProductsByCategory,
  category,
}: CardMenuProps) => {
  const [data, setData] = useState<Product[]>()

  console.log("category", category)
  const makeRequest = async () => {
    setData(await getProductsByCategory.get())
  }

  useEffect(() => {
    makeRequest()
  }, [getProductsByCategory])

  function renderItem(item: any) {
    return <CardItem item={item} key={item.id} />
  }

  console.log("producst =>", data)

  return (
    <Container marginBottom={marginBottom}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flexDirection: "column" }}
        numColumns={2}
        data={data}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: any) => item.id}
      />
    </Container>
  )
}

export default CardMenu
