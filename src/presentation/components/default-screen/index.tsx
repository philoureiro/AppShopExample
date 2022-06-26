import React from "react"
import Header from "../header"
import { Container } from "./styles"

interface IDefaultScreen {
  namePage: string
  showHeader?: boolean
  children: React.ReactNode
  height?: number
}
const DefaultScreen = ({
  children,
  namePage,
  showHeader,
  height,
}: IDefaultScreen) => {
  return (
    <>
      {showHeader && <Header label={namePage} />}

      <Container height={height}>{children}</Container>
    </>
  )
}

export default DefaultScreen
