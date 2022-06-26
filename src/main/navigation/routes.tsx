import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { SplashScreen } from "../../presentation/components"
import MyTabs from "../../presentation/components/tab-navigator"
import { Categories, PopularDeals } from "../../presentation/screens"

const Stack = createNativeStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="PopularDeals" component={PopularDeals} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
