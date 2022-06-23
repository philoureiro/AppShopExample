import {RemoteLogout} from '../../../data/usecases/remote-logout';
import {ILogout} from '../../../domain/usecasaes/logout';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteLogout = (): ILogout =>
  new RemoteLogout(makeApiUrl('/auth/logout'), makeAxiosHttpClient());
