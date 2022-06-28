import { useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"

interface IProduct {}
const Product = () => {
  const route = useRoute()
  const { item } = route.params
  console.log("iteeeeem", item)

  return (
    item && (
      <DefaultScreen namePage={item?.item.name} showHeader></DefaultScreen>
    )
  )
}

export default Product
