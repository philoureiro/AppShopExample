import {RemoteMe} from '../../../data/usecases/remote-me';
import {IMe} from '../../../domain/usecasaes/me';
import {makeApiUrl, makeAxiosHttpClient} from '../http';

export const makeRemoteMe = (): IMe =>
  new RemoteMe(makeApiUrl('/user/me'), makeAxiosHttpClient());
