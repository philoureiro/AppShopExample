import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Header = styled.View`
  background-color: red;
  flex: 1;
  height: 100%;
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
