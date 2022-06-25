import styled from "styled-components/native"
import { theme } from "../../../../styles/theme"

export const Container = styled.View`
  background-color: white;
  height: 35%;
  border-radius: 25px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  elevation: 6;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  margin-bottom: 10px;
`

export const CardHeader = styled.View`
  height: 20%;
  justify-content: space-between;
  /* background-color: red; */
`

export const Row = styled.View`
  height: 1px;
  width: 100%;
  background-color: #ededed;
  margin-bottom: 20px;
`
export const LabelBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
export const Label = styled.Text`
  font-size: 20px;
  font-family: ${theme.font.familyBold};
`

export const SeeAllLabel = styled.Text`
  font-size: 16px;
  font-family: ${theme.font.familyBold};
  color: ${theme.colors.primaryGreen};
`

export const FlatList = styled.FlatList`
  padding-top: 5px;
`
