import { Entypo } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import Routes from "../../../../../main/navigation/routes-types"
import {
  Container,
  LabelBox,
  BoxImage,
  Image,
  BoxInfo,
  ProductName,
  Discount,
  Price,
  CartController,
  AmountText,
} from "./styles"

interface CardItemProps {
  item: any
}
const CardItem = ({ item }: CardItemProps) => {
  const navigation = useNavigation()
  const [isSelected, setIsSelected] = useState(false)
  const [numberOfItems, setNumberOfItems] = useState(0)

  function handleClickOnPlus() {
    isSelected
      ? setNumberOfItems(numberOfItems + 1)
      : setIsSelected(!isSelected)
  }
  function handleClickOnMinus() {
    setNumberOfItems(numberOfItems > 0 ? numberOfItems - 1 : 0)
    setIsSelected(numberOfItems === 0 ? !isSelected : true)
  }
  return (
    <Container>
      <BoxImage
        onPress={() => navigation.navigate(Routes.Product, { item: item })}
      >
        <Image
          //${item.item.url}
          source={{
            uri: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
          }}
        />
      </BoxImage>

      <LabelBox>
        <ProductName>{item.item.name}</ProductName>
        <Discount>{item.item.name}</Discount>
        <Price>{item.item.name}</Price>
      </LabelBox>

      <CartController selected={isSelected}>
        <TouchableOpacity onPress={handleClickOnPlus}>
          <Entypo name="plus" size={25} color="white" />
        </TouchableOpacity>

        {isSelected && (
          <>
            <AmountText>{numberOfItems}</AmountText>
            <TouchableOpacity onPress={handleClickOnMinus}>
              <Entypo name="minus" size={25} color="white" />
            </TouchableOpacity>
          </>
        )}
      </CartController>
    </Container>
  )
}

export default CardItem
