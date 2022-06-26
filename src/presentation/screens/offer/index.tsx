import { View, Image } from "react-native"
import React from "react"
import { DefaultCard, DefaultScreen } from "../../components"

const Offer = () => {
  return (
    <View style={{ flex: 1 }}>
      <DefaultScreen namePage="Offer" showHeader>
        <DefaultCard marginBottom={200}>
          <Image
            source={require("../../assets/offers/special-day.png")}
            style={{
              height: 150,
              width: "100%",
              borderRadius: 25,
            }}
          />

          <Image
            source={require("../../assets/offers/black-friday.jpg")}
            style={{
              height: 150,
              width: "100%",
              borderRadius: 25,
              marginTop: 20,
            }}
          />
          <Image
            source={require("../../assets/offers/black-friday3.jpg")}
            style={{
              height: 150,
              width: "100%",
              borderRadius: 25,
              marginTop: 20,
            }}
          />
          <Image
            source={require("../../assets/offers/black-friday2.jpg")}
            style={{
              height: 150,
              width: "100%",
              borderRadius: 25,
              marginTop: 20,
            }}
          />
        </DefaultCard>
      </DefaultScreen>
    </View>
  )
}

export default Offer
