import React from "react"
import { TouchableOpacity } from "react-native"
import {
  Container,
  Row,
  Label,
  LabelBox,
  SeeAllLabel,
  CardHeader,
} from "./styles"

const CategoriesCard = () => {
  return (
    <Container>
      <CardHeader>
        <LabelBox>
          <Label>Categories</Label>
          <TouchableOpacity>
            <SeeAllLabel>See All</SeeAllLabel>
          </TouchableOpacity>
        </LabelBox>
        <Row />
      </CardHeader>
    </Container>
  )
}

export default CategoriesCard
