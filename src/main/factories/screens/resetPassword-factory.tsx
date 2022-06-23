import React from 'react';
import {ResetPassword} from '../../../presentation/screens/resetPassword';
import {makeRemoteResetPassword} from '../usecases/remote-resetPassword-factory';

export const MakeResetPassword = () => {
  return <ResetPassword reset={makeRemoteResetPassword()} />;
};
