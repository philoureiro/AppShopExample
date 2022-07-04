import React, { useState } from "react"
import { CurvedBottomBar } from "react-native-curved-bottom-bar"

import LottieView from "lottie-react-native"
import { Cart, Home, Offer, Order, SignIn } from "../../screens"
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

import returnIconSelected from "../../../utils/returnIcons"
import { useCart } from "../../../application/contexts/Cart/Cart"

const TabNavigator = () => {
  const cart = useCart()

  function handleNavigate(navigate: any, routeName: any) {
    navigate(routeName)
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
          <CircleButton
            onPress={() => handleNavigate(navigate, AllRoutes.Cart)}
          >
            <InternalCircle>
              {cart.data.length === 0 ? (
                returnIconSelected("Cart", selectedTab)
              ) : (
                <>
                  <IconAndFlagBox>
                    <Tag source={require("../../assets/icons/tag.png")} />
                    <Text>{cart.data.length}</Text>
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
