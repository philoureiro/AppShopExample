import {RemoteUpdateUserAddress} from '../../../data/usecases/remote-updateUserAddress';
import {IUpdateUserAddress} from '../../../domain/usecasaes/updateUserAddress';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeUpdateAddress = (): IUpdateUserAddress =>
  new RemoteUpdateUserAddress(makeApiUrl('/address'), makeAxiosHttpClient());
