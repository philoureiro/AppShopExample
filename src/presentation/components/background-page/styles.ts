import styled from "styled-components/native"
import { theme } from "../../styles/theme"

export const Container = styled.View`
  background-color: ${theme.colors.lightWhite};
  flex: 1;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  margin-top: -20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  elevation: 6;
`
