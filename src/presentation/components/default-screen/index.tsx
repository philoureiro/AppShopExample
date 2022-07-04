import React from "react"
import Header from "../header"
import { Container, Scroll } from "./styles"

interface IDefaultScreen {
  namePage: string
  showHeader?: boolean
  children: React.ReactNode
  height?: number
  scroollable?: boolean
  bgColor?: string
  padding?: number
  marginTop?: number
}
const DefaultScreen = ({
  scroollable,
  children,
  namePage,
  showHeader,
  height,
  bgColor,
  padding,
  marginTop,
}: IDefaultScreen) => {
  return (
    <>
      {showHeader && <Header label={namePage} />}

      {scroollable ? (
        <Scroll
          height={height}
          bgColor={bgColor}
          marginTop={marginTop}
          padding={padding}
        >
          {children}
        </Scroll>
      ) : (
        <Container
          height={height}
          bgColor={bgColor}
          marginTop={marginTop}
          padding={padding}
        >
          {children}
        </Container>
      )}
    </>
  )
}

export default DefaultScreen
