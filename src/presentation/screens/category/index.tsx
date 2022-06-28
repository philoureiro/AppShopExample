import { useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const Category = () => {
  const route = useRoute()
  const { item } = route.params
  return (
    <DefaultScreen namePage={item?.item.name} showHeader>
      <CardMenu />
    </DefaultScreen>
  )
}

export default Category
