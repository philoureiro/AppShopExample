import styled from "styled-components/native"
import { BlurView } from "expo-blur"

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: #06000f;
`
export const Text = styled.Text`
  color: white;
`

export const Title = styled.Text`
  margin-left: 2px;
  font-size: 28px;

  color: white;
`
export const ImageContainer = styled.View`
  top: 0;
  flex: 1;
  width: 100%;
  padding: 2px;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
`

export const CardContainer = styled.View`
  background-color: #06000f;
  flex: 1;
  width: 100%;
  bottom: 0px;
  /* margin-top: -30px; */
  opacity: 0.2;
  height: 50%;
  position: absolute;
`

export const Scroll = styled.ScrollView`
  bottom: 0px;
  flex-grow: 1;

  flex: 1;
  top: 15%;
`

export const InfoContainer = styled(BlurView)`
  /* background-color: #06000f; */
  bottom: 0px;
  padding: 5px;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

export const Button = styled.TouchableOpacity`
  margin-bottom: 40%;
  margin-top: 30%;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 150px;
  border-radius: 50px;
`
