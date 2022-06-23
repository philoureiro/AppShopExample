import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomBarNavigation from '../../presentation/components/BottomBarNavigation';
import FeedbackScreen from '../../presentation/screens/feedback';
import {MakeUpadateUser} from '../factories/screens/updateUser-factory';
import {MakeUpdateUserAddress} from '../factories/screens/updateUserAddress-factory';
import Routes from './routes';
import {StackParamList} from './types';

const Stack = createNativeStackNavigator<StackParamList>();

export function PrivateStack() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.BottomNavigation}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Routes.BottomNavigation}
        component={BottomBarNavigation}
      />

      <Stack.Screen name={Routes.UpdateUser} component={MakeUpadateUser} />

      <Stack.Screen
        name={Routes.UpdateUserAddress}
        component={MakeUpdateUserAddress}
      />

      <Stack.Screen name={Routes.FeedbackPage} component={FeedbackScreen} />
    </Stack.Navigator>
  );
}
