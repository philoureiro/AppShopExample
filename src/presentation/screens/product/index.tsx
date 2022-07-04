import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { DefaultScreen } from "../../components"

import { TouchableOpacity, View, Text } from "react-native"
import { getWidthSize } from "../../../utils/responsivity"
import { Ionicons } from "@expo/vector-icons"

import { Scroll, Container, Gradient, Image, Card } from "./styles"
import { theme } from "../../styles/theme"

interface IProduct {}
const ProductPage = () => {
  const route = useRoute()
  const { product } = route.params

  console.log("product ==>", product)

  const navigation = useNavigation()
  return (
    product && (
      <>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            height: 100,
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              style={{ marginLeft: 15 }}
              size={35}
              color={theme.colors.black}
            />
          </TouchableOpacity>
        </View>
        <DefaultScreen
          padding={1}
          marginTop={-30}
          bgColor="white"
          namePage={product.title.split(" ").slice(0, 2).join(" ")}
        >
          <Image source={{ uri: product?.image }} resizeMode="stretch" />
          <Scroll centerContent>
            {/* <view colors={["transparent", "white"]}> */}
            <Card marginTop={getWidthSize(320)} />
            <Card height={280} />
            <Card height={280} />
            <Card marginBottom={100} height={80} />
            {/* </Gradient> */}
          </Scroll>
        </DefaultScreen>
      </>
    )
  )
}

export default ProductPage
