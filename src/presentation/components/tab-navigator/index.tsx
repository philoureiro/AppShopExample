import {
  createBottomTabNavigator,
  BottomTabBar,
} from "@react-navigation/bottom-tabs"

import { Dashboard, Profile, Search } from "../../screens/index"

import React from "react"
import { View, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntiDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import { theme } from "../../styles/theme"
const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBar={(props) => (
        <View
          style={{
            backgroundColor: theme.colors.primaryGreen,
            justifyContent: "center",
            height: 90,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 30,
            position: "absolute",
          }}
        >
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={() => ({
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#c9cbcc",
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopColor: "transparent",
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Concert-One",
                fontWeight: focused ? "bold" : "normal",
                color: "white",
              }}
            >
              Home
            </Text>
          ),

          tabBarIcon: ({ color, focused }) => (
            <AntiDesign
              name="appstore-o"
              color={color}
              size={focused ? 32 : 25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Search}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Concert-One",
                fontWeight: focused ? "bold" : "normal",
                color: "white",
              }}
            >
              Order
            </Text>
          ),
          tabBarLabelStyle: { fontSize: 12 },

          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              name="shopping-basket"
              color={color}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Dashboard}
        options={() => ({
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 90,
                height: 90,
                marginBottom: 45,
                backgroundColor: "transparent",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "white",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 5,
              }}
            >
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 45,
                  backgroundColor: "white",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "black",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 5,
                  padding: 8,
                }}
              >
                <LinearGradient
                  style={{
                    borderRadius: 40,
                    width: 80,
                    height: 80,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.2,
                    shadowRadius: 5,
                  }}
                  start={{ x: 0, y: 1 }}
                  end={{ x: 0, y: 0 }}
                  colors={["#27B161", "#898981"]}
                >
                  <MaterialCommunityIcons
                    name="cart"
                    size={focused ? 45 : 35}
                    color="#FFF"
                  />
                </LinearGradient>
              </View>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Offer"
        component={Search}
        options={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Concert-One",
                fontWeight: focused ? "bold" : "normal",
                color: "white",
              }}
            >
              Offer
            </Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="shop" color={color} size={focused ? 32 : 25} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 15,
                fontFamily: "Concert-One",
                fontWeight: focused ? "bold" : "normal",
                color: "white",
              }}
            >
              More
            </Text>
          ),
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="options" color={color} size={focused ? 32 : 25} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs
