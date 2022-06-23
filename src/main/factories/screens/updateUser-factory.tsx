import React from 'react';
import UpdateUser from '../../../presentation/screens/updateUser';
import {makeRemoteMe} from '../usecases/remote-me-factory';
import {makeRemoteUpdateUser} from '../usecases/remote-updateuser-factory';

export const MakeUpadateUser = () => {
  return (
    <UpdateUser
      saveUserUpdate={makeRemoteUpdateUser()}
      userInfo={makeRemoteMe()}
    />
  );
};
