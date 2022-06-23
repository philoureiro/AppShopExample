import {RemoteUpdateUser} from '../../../data/usecases/remote-updateUser';
import {IUpdateUser} from '../../../domain/usecasaes/updateUser';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteUpdateUser = (): IUpdateUser =>
  new RemoteUpdateUser(makeApiUrl('/user'), makeAxiosHttpClient());
