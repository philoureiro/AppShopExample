import React from "react"
import { makeRemoteGetCategories } from "../../../application/factories/usecases/categories/remote-getCategories-factory copy"
import { DefaultScreen } from "../../components"
import CardMenu from "./components/card-menu"

const Categories = () => {
  return (
    <DefaultScreen namePage="Categories" showHeader>
      <CardMenu getCategories={makeRemoteGetCategories()} />
    </DefaultScreen>
  )
}

export default Categories
