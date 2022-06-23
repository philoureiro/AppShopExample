import React from 'react';
import ForgotPassword from '../../../presentation/screens/forgotPassword';
import {makeRemoteForgotPassword} from '../usecases/remote-forgotPassword-factory';

export const MakeForgotPassword = () => {
  return <ForgotPassword forgotPassword={makeRemoteForgotPassword()} />;
};
