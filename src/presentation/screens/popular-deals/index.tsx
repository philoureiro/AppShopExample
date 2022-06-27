import React from "react"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const PopularDeals = () => {
  return (
    <DefaultScreen namePage="PopularDeals" showHeader>
      <CardMenu />
    </DefaultScreen>
  )
}

export default PopularDeals
