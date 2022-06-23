import {RemoteAddress} from '../../../data/usecases/remote-address';
import {IAddress} from '../../../domain/usecasaes/address';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeAddress = (): IAddress =>
  new RemoteAddress(makeApiUrl('/address/me'), makeAxiosHttpClient());
