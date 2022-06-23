import React from 'react';
import RecoveryPassword from '../../../presentation/screens/recoveryPassword';
import {makeRemoteCheckResetPasswordToken} from '../usecases/remote-checkResetPasswordToken-factory copy';

export const MakeRecoveryPassword = () => {
  return <RecoveryPassword checkToken={makeRemoteCheckResetPasswordToken()} />;
};
