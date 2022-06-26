import React from "react"
import LoginScreen from "../../../presentation/screens/sign-in"
import { makeRemoteAuthentication } from "../usecases/remote-authentication-factory"

export const MakeLogin = () => {
  return <LoginScreen authetication={makeRemoteAuthentication()} />
}
