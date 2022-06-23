import React from 'react';
import {ValidateZipCode} from '../../../domain/services/validateZipCode';
import UpdateUserAddress from '../../../presentation/screens/updateUserAddress';
import {makeAddress} from '../usecases/remote-address-factory';
import {makeUpdateAddress} from '../usecases/remote-updateAddress-factory';

export const MakeUpdateUserAddress = () => {
  return (
    <UpdateUserAddress
      validateZipCode={new ValidateZipCode()}
      userAddress={makeAddress()}
      updateAddress={makeUpdateAddress()}
    />
  );
};
