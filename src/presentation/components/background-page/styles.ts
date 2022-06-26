import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.ScrollView`
  background-color: ${theme.colors.lightWhite};
  flex: 1;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -20px;
  box-shadow: gray 0px 3px 8px;
  elevation: 6;
`
