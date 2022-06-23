import React from 'react';
import LoginScreen from '../../../presentation/screens/signIn';
import {makeRemoteAuthentication} from '../usecases/remote-authentication-factory';

export const MakeLogin = () => {
  return <LoginScreen authetication={makeRemoteAuthentication()} />;
};
