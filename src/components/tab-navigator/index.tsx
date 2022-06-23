import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import { Dashboard, MovieDetails, Profile, Search } from "../../pages"
import { BottomTabBar } from "@react-navigation/bottom-tabs"
import { BlurView } from "expo-blur"

const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBar={(props) => (
        <BlurView
          intensity={10}
          style={{
            backgroundColor: "transparent",
            justifyContent: "center",
            height: 60,

            bottom: 20,
            left: 0,
            right: 0,
            borderTopLeftRadius: 10,
            position: "absolute",
          }}
        >
          <BottomTabBar {...props} />
        </BlurView>
      )}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ff2e2e",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "transparent",

          bottom: -10,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",

          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-search-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Movie Details"
        component={MovieDetails}
        options={{
          tabBarLabel: "Movie Details",
          tabBarIcon: ({ color }) => (
            <Feather name="play" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default MyTabs
