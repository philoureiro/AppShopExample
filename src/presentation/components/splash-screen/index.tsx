import { View, Text, Image } from "react-native"
import React from "react"
import LottieView from "lottie-react-native"
import { useNavigation } from "@react-navigation/native"

const SplashScreen = () => {
  const navigationRef = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0a0117",

        padding: 30,
      }}
    >
      <LottieView
        source={require("./splashScreen.json")}
        autoPlay
        loop={false}
        autoSize
        onAnimationFinish={() => navigationRef.navigate("MyTabs")}
      />
      <Image
        source={require("./coolMovies.png")}
        style={{
          marginTop: -20,
          height: 210,
          width: 400,
        }}
      />
    </View>
  )
}

export default SplashScreen
