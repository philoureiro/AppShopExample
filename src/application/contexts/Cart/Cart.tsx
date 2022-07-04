import React, { useContext, useState, createContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { CartContextData, StorageKeys } from "./CartType"
import { Product } from "../../../interfaces/models/Product"

type AuthProviderProps = {
  children: React.ReactNode
}

export interface CartType {
  quantity: number
  item: Product
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [cartData, setCartData] = useState<CartType[]>([])
  const [loading, setLoading] = useState(true)

  const updateProductsInfo = (products: CartType[]) => {
    setCartData(products)
  }

  const clearProductsInfo = () => {
    return setCartData([])
  }

  return (
    <CartContext.Provider
      value={{
        clearProductsInfo,
        loading,
        updateProductsInfo,
        data: cartData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
