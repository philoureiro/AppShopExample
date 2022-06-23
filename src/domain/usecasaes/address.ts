import {AddressModel} from '../models';

export interface IAddress {
  address: (accessToken: string) => Promise<{address: AddressModel}>;
}
