import styled from "styled-components/native"
import { theme } from "../../../../styles/theme"

export const Container = styled.View`
  background-color: white;
  height: 35%;
  border-radius: 25px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
`

export const CardHeader = styled.View`
  height: 30%;
  justify-content: space-between;
`
export const LabelBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Row = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ededed;
`
export const Label = styled.Text`
  font-size: 20px;
  font-family: ${theme.font.family};
`

export const SeeAllLabel = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.family};
  color: ${theme.colors.primaryGreen};
`
