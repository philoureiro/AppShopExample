import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native"

import { theme } from "../../styles/theme"
import * as S from "./styles"

interface CustomInputProps extends TextInputProps {
  error?: { message: string }
  label: string
  loading?: boolean
  disabled?: boolean
  secureTextEntry?: boolean
  iconName: string
}

const CustomInput = ({
  iconName,
  error,
  label,
  loading,
  disabled,
  secureTextEntry,
  ...props
}: CustomInputProps) => {
  const [isVisible, setIsVisible] = useState(secureTextEntry ? true : false)

  return (
    <S.Wrapper disabled={disabled}>
      <S.Label>{label}</S.Label>
      <S.InputWrapper error={!!error}>
        <MaterialCommunityIcons name={iconName} size={30} />
        <TextInput
          style={style.input}
          {...props}
          editable={!disabled}
          placeholderTextColor={theme.colors.lightGreen}
          secureTextEntry={isVisible}
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <FontAwesome name={isVisible ? "eye" : "eye-slash"} size={30} />
          </TouchableOpacity>
        )}
        {loading && <ActivityIndicator color={theme.colors.primaryGreen} />}
      </S.InputWrapper>
      {error && <S.ErrorMessage>{error?.message}</S.ErrorMessage>}
    </S.Wrapper>
  )
}

const style = StyleSheet.create({
  input: {
    flex: 1,
    color: "#000",
  },
})

export default CustomInput
