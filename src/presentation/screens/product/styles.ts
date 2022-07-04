import styled from "styled-components/native"

import { getWidthSize } from "../../../utils/responsivity"
import { LinearGradient } from "expo-linear-gradient"
import { theme } from "../../styles/theme"

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Text = styled.Text``

export const Scroll = styled.ScrollView`
  /* background-color: yellow; */
  border-radius: 25px;
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
`

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 1200px;
  flex: 1;
  padding: 20px;
  border-radius: 25px;
  margin-top: 100;
`
export const Image = styled.Image`
  width: 90%;
  height: 45%;

  border-radius: 25px;
  position: absolute;
`

interface ICardProps {
  marginTop?: string
}
export const Card = styled.View<ICardProps>`
  border-radius: 25px;

  margin-top: ${(props) => (props.marginTop ? props.marginTop : 10)}px;
  background-color: ${theme.colors.white};
  width: 100%;
  height: ${getWidthSize(160)};
`
