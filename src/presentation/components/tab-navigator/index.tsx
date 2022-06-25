import React from "react"
import { StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { CurvedBottomBar } from "react-native-curved-bottom-bar"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { Dashboard, Profile, Search } from "../../screens"
import { theme } from "../../styles/theme"
import { Container, Label } from "./styles"
import Routes from "../../../main/navigation/routes"

const ThemeScreen = () => {
  function handleNavigate(navigate: any, routeName: any) {
    navigate(routeName)
  }

  function returnIconSelected(routeName: string, selectedTab?: string) {
    switch (routeName) {
      case Routes.Home:
        return (
          <AntDesign
            name="appstore-o"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case Routes.Order:
        return (
          <FontAwesome
            name="shopping-basket"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 22}
          />
        )
      case Routes.Cart:
        return (
          <MaterialCommunityIcons
            name="cart"
            color={theme.colors.primaryGreen}
            size={routeName === selectedTab ? 36 : 25}
          />
        )

      case Routes.Offer:
        return (
          <Entypo
            name="shop"
            color={routeName === selectedTab ? "white" : theme.colors.gray}
            size={routeName === selectedTab ? 30 : 25}
          />
        )
      case Routes.More:
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
          <TouchableOpacity
            style={styles.btnCircle}
            onPress={() => {
              handleNavigate(navigate, selectedTab)
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                width: "75%",
                height: "75%",
                borderRadius: 50,
              }}
            >
              {returnIconSelected("Cart", selectedTab)}
            </View>
          </TouchableOpacity>
        )}
        tabBar={({ navigate, routeName, selectedTab }) => {
          return (
            <TouchableOpacity
              onPress={() => handleNavigate(navigate, routeName)}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {returnIconSelected(routeName, selectedTab)}

              <Label isSelected={routeName === selectedTab ? true : false}>
                {routeName}
              </Label>
            </TouchableOpacity>
          )
        }}
      >
        <CurvedBottomBar.Screen
          name="Home"
          position="LEFT"
          children={() => <Dashboard />}
        />

        <CurvedBottomBar.Screen
          name="Order"
          position="LEFT"
          children={() => <Profile />}
        />
        <CurvedBottomBar.Screen
          name="Cart"
          children={() => <Search />}
          position="CENTER"
        />
        <CurvedBottomBar.Screen
          name="Offer"
          children={() => <Profile />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="More"
          children={() => <Profile />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </Container>
  )
}

export default ThemeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnCircle: {
    width: 65,
    height: 65,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primaryGreen,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 6,
    bottom: 24,
  },

  imgCircle: {
    width: 35,
    height: 35,
    backgroundColor: "red",
  },
  img: {
    width: 35,
    height: 35,
  },
})
