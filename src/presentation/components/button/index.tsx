import React from "react"
import { Title, TouchableOpacity } from "./styles"

interface IButton {
  onPress: () => void
  title: string
  loading: boolean
  marginTop?: number
  marginBottom?: number
}
const Button = ({
  loading,
  onPress,
  title,
  marginBottom,
  marginTop,
}: IButton) => {
  return (
    <TouchableOpacity marginTop={marginTop} marginBottom={marginBottom}>
      <Title>{title}</Title>
    </TouchableOpacity>
  )
}

export default Button
