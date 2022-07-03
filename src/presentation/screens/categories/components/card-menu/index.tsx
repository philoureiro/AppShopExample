import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { ActivityIndicator } from "react-native"
import { IGetCategories } from "../../../../../domain/usecases/interfaces/category/getCategories"
import { Category } from "../../../../../interfaces/models/Category"
import { getWidthSize } from "../../../../../utils/responsivity"

import CardItem from "../card-item"
import { Container, FlatList } from "./styles"

interface CardMenuProps {
  marginBottom?: number
  getCategories: IGetCategories
}
const CardMenu = ({ marginBottom, getCategories }: CardMenuProps) => {
  const [data, setData] = useState<Category[]>()
  const [loading, setLoading] = useState(false)

  const makeRequest = async () => {
    setLoading(true)
    setData(await getCategories.get())
    setLoading(false)
  }

  useEffect(() => {
    makeRequest()
  }, [getCategories])

  function renderItem(item: any) {
    return <CardItem item={item} key={item.id} />
  }

  return (
    <Container marginBottom={marginBottom}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          style={{
            flexDirection: "column",
          }}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: getWidthSize(10),
          }}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={data}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </Container>
  )
}

export default CardMenu
