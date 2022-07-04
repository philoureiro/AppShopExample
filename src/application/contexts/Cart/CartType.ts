import { CartType } from "./Cart"

export interface CartContextData {
  data: CartType[]
  updateProductsInfo: (data: CartType[]) => void
  clearProductsInfo: () => void
  loading: boolean
}

export enum StorageKeys {
  cartData = "@app_shop_example:cartData",
}
