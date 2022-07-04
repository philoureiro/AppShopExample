import { View, Text } from "react-native"
import React from "react"
import { DefaultScreen } from "../../components"
import { useCart } from "../../../application/contexts/Cart/Cart"

const Cart = () => {
  const cart = useCart()
  console.log("cart", cart.data)
  return <DefaultScreen namePage="Cart" showHeader></DefaultScreen>
}

export default Cart
