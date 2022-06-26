import React from "react"
import { ValidateLegalAge } from "../../../domain/services/validateLegalAge"
import { ValidateZipCode } from "../../../domain/services/validateZipCode"
import SignUpScreen from "../../../presentation/screens/sign-up"
import { makeRemoteSignUp } from "../usecases/remote-signUp-factory"
import { makeRemoteValidateEmail } from "../usecases/remote-validateEmail-factory"

export const MakeSignUp = () => {
  return (
    <SignUpScreen
      addUser={makeRemoteSignUp()}
      validateEmail={makeRemoteValidateEmail()}
      validateAge={new ValidateLegalAge()}
      validateZipCode={new ValidateZipCode()}
    />
  )
}
