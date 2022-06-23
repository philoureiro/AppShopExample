import React from 'react';
import Home from '../../../presentation/screens/home';
import {makeRemoteLogout} from '../usecases/remote-logout-factory';

export const MakeHome = () => {
  return <Home logout={makeRemoteLogout()} />;
};
