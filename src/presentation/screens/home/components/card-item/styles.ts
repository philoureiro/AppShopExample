import styled from "styled-components/native"
import { theme } from "../../../../styles/theme"

export const Container = styled.View`
  max-height: 90%;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  width: 100px;
  margin-right: 10px;
`
export const LabelBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  text-align: center;
`

export const BoxImage = styled.TouchableOpacity`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 2px 2px;
  background-color: ${theme.colors.lightGreen};
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  margin-bottom: 5px;
  margin-top: 10px;
`

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 20px;
`
