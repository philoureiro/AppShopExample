import { AllRoutes } from "../application/navigation/routes-types"
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons"
import { theme } from "../presentation/styles/theme"
import React from "react"

const returnIconSelected = (routeName: string, selectedTab?: string) => {
  switch (routeName) {
    case AllRoutes.Home:
      return (
        <AntDesign
          name="appstore-o"
          color={routeName === selectedTab ? "white" : theme.colors.gray}
          size={routeName === selectedTab ? 30 : 25}
        />
      )
    case AllRoutes.Order:
      return (
        <FontAwesome
          name="shopping-basket"
          color={routeName === selectedTab ? "white" : theme.colors.gray}
          size={routeName === selectedTab ? 30 : 22}
        />
      )
    case AllRoutes.Cart:
      return (
        <MaterialCommunityIcons
          name="cart"
          color={theme.colors.white}
          size={routeName === selectedTab ? 30 : 25}
        />
      )

    case AllRoutes.Offer:
      return (
        <Entypo
          name="shop"
          color={routeName === selectedTab ? "white" : theme.colors.gray}
          size={routeName === selectedTab ? 30 : 25}
        />
      )
    case AllRoutes.More:
      return (
        <Ionicons
          name="options"
          color={routeName === selectedTab ? "white" : theme.colors.gray}
          size={routeName === selectedTab ? 35 : 28}
        />
      )
  }
}

export default returnIconSelected
