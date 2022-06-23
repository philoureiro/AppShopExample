import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';
import {IAuthentication} from '../../../domain/usecasaes/authentication';
import {RemoteAuthentication} from '../../../data/usecases/remote-authentication';

export const makeRemoteAuthentication = (): IAuthentication =>
  new RemoteAuthentication(makeApiUrl('/auth/login'), makeAxiosHttpClient());
