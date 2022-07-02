import { useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"

interface IProduct {}
const Product = () => {
  const route = useRoute()
  const { item } = route.params
  console.log("item", item)

  return (
    item && (
      <DefaultScreen
        namePage={item.title.split(" ").slice(0, 2).join(" ")}
        showHeader
      ></DefaultScreen>
    )
  )
}

export default Product
