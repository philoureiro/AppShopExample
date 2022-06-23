import {AddressModel} from '../models';

export interface IUpdateUserAddress {
  update: (address: AddressModel, accessToken: string) => Promise<AddressModel>;
}
