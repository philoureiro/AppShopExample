import { NativeStackScreenProps } from "@react-navigation/native-stack"
import Routes from "./routes-types"

export type StackParamList = {
  bottomNavigation: undefined
  shop: undefined
  profile: undefined
  home: undefined
  updateUser: undefined
  updateUserAddress: undefined
  authentication: undefined
  signUp: undefined
  forgotPassword: undefined
  recoveryPassword: { email: string }
  resetPassword: { email: string; code: string }
  feedbackPage: { message: string; goTo: Routes }
  category: { item: any }
}

type Props = NativeStackScreenProps<StackParamList>
export type DefaultNavigationProps = Props["navigation"]
