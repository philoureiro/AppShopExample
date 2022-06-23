import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeedbackScreen from '../../presentation/screens/feedback';
import {MakeForgotPassword} from '../factories/screens/forgotPassword-factory';
import {MakeLogin} from '../factories/screens/login-factory';
import {MakeRecoveryPassword} from '../factories/screens/recoveryPassword-factory';
import {MakeResetPassword} from '../factories/screens/resetPassword-factory';
import {MakeSignUp} from '../factories/screens/signUp-factory';
import Routes from './routes';
import {StackParamList} from './types';

const Stack = createNativeStackNavigator<StackParamList>();

export function PublicStack() {
  return (
    <Stack.Navigator initialRouteName={Routes.Authentication}>
      <Stack.Screen
        name={Routes.Authentication}
        component={MakeLogin}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Routes.SignUp}
        component={MakeSignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={Routes.ForgotPassword}
        component={MakeForgotPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.RecoveryPassword}
        component={MakeRecoveryPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.ResetPassword}
        component={MakeResetPassword}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={Routes.FeedbackPage}
        component={FeedbackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
