import styled from "styled-components/native"
import { getWidthSize } from "../../../utils/responsivity"
import { theme } from "../../styles/theme"

interface IContainerProps {
  height?: number
  bgColor?: string
  padding?: number
  marginTop?: number
}

export const Container = styled.View<IContainerProps>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : theme.colors.lightWhite};
  flex: 1;
  padding: ${(props) => (props.padding ? props.padding : 20)}px;

  align-items: center;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: ${(props) => getWidthSize(props.marginTop || -20)}px;

  height: ${(props) => (props.height ? props.height : 0)}px;
`

export const Scroll = styled.ScrollView<IContainerProps>`
  background-color: ${theme.colors.lightWhite};
  flex: 1;
  height: ${(props) => (props.height ? props.height : 0)}px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: ${(props) => getWidthSize(props.marginTop || -20)}px;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
  height: ${(props) => (props.height ? props.height : 0)}px;
`
