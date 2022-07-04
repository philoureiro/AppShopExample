import styled from "styled-components/native"
import { getWidthSize } from "../../../utils/responsivity"
import { theme } from "../../styles/theme"

export const Header = styled.View`
  flex: 1;
`

export const Container = styled.View`
  flex: 1;
`

interface LabelProps {
  isSelected?: boolean
}
export const Label = styled.Text<LabelProps>`
  color: ${(props) =>
    props.isSelected ? theme.colors.white : theme.colors.gray};
  font-family: ${theme.font.family};
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 5px;
  font-weight: ${theme.font.weight.bold};
`

export const CircleButton = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  border-radius: 35px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray};
  box-shadow: gray 0px 3px 8px;
  border-color: ${theme.colors.primaryGreen};
  border-width: 2px;

  elevation: 6;
  bottom: 24px;
`

export const InternalCircle = styled.View`
  background-color: ${theme.colors.primaryGreen};
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  border-radius: 25px;
`

export const IconAndFlagBox = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: ${getWidthSize(32)}px;
`

export const Tag = styled.Image`
  height: 50px;
  width: 55px;
`

export const Text = styled.Text`
  position: absolute;
  color: white;
  font-weight: bold;
  top: ${getWidthSize(10)}px;
`

export const TabBar = styled.TouchableOpacity`
  height: 50px;
  width: 55px;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 3px;
  margin-left: ${getWidthSize(15)}px;
`
