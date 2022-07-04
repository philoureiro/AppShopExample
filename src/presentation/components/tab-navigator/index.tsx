import React, { useState } from "react"
import { CurvedBottomBar } from "react-native-curved-bottom-bar"
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons"
import LottieView from "lottie-react-native"
import { Cart, Home, More, Offer, Order, SignIn } from "../../screens"
import { theme } from "../../styles/theme"
import {
  CircleButton,
  Container,
  IconAndFlagBox,
  InternalCircle,
  Label,
  Tag,
  Text,
  TabBar,
} from "./styles"

import { AllRoutes } from "../../../application/navigation/routes-types"
import { makeRemoteAuthentication } from "../../../application/factories/usecases/categories/remote-authentication-factory"
import { getWidthSize } from "../../../utils/responsivity"

const TabNavigator = () => {
  const [cartIsEmpty, setCartIsEmpty] = useState(true)
  function handleNavigate(navigate: any, routeName: any) {
    navigate(routeName)
  }

  function returnIconSelected(routeName: string, selectedTab?: string) {
    switch (routeName) {
      case AllRoutes.Home:
        return (
          <AntDesign
            name="appstore-o"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case AllRoutes.Order:
        return (
          <FontAwesome
            name="shopping-basket"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 22}
          />
        )
      case AllRoutes.Cart:
        return (
          <MaterialCommunityIcons
            name="cart"
            color={theme.colors.white}
            size={routeName === selectedTab ? 30 : 25}
          />
        )

      case AllRoutes.Offer:
        return (
          <Entypo
            name="shop"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case AllRoutes.More:
        return (
          <Ionicons
            name="options"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 35 : 28}
          />
        )
    }
  }
  return (
    <Container>
      <CurvedBottomBar.Navigator
        screenOptions={{ headerShown: false }}
        type={"DOWN"}
        height={75}
        circleWidth={55}
        bgColor={theme.colors.primaryGreen}
        borderTopLeftRight={true}
        initialRouteName="Home"
        renderCircle={({ navigate, selectedTab }) => (
          <CircleButton onPress={() => setCartIsEmpty(!cartIsEmpty)}>
            <InternalCircle>
              {cartIsEmpty ? (
                returnIconSelected("Cart", selectedTab)
              ) : (
                <>
                  <IconAndFlagBox>
                    <Tag source={require("../../assets/icons/tag.png")} />
                    <Text>99</Text>
                  </IconAndFlagBox>

                  <LottieView
                    source={require("../../assets/animations/cart.json")}
                    autoPlay
                    loop={true}
                    autoSize
                    style={{
                      width: "190%",
                      justifyContent: "center",
                    }}
                  />
                </>
              )}
            </InternalCircle>
          </CircleButton>
        )}
        tabBar={({ navigate, routeName, selectedTab }) => {
          return (
            <TabBar onPress={() => handleNavigate(navigate, routeName)}>
              {returnIconSelected(routeName, selectedTab)}

              <Label isSelected={routeName === selectedTab ? true : false}>
                {routeName}
              </Label>
            </TabBar>
          )
        }}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          children={() => <Home />}
        />

        <CurvedBottomBar.Screen
          name="Order"
          position="LEFT"
          children={() => <Order />}
        />
        <CurvedBottomBar.Screen
          name="Cart"
          children={() => <Cart />}
          position="CENTER"
        />
        <CurvedBottomBar.Screen
          name="Offer"
          children={() => <Offer />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="More"
          children={() => <SignIn authetication={makeRemoteAuthentication()} />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </Container>
  )
}

export default TabNavigator
