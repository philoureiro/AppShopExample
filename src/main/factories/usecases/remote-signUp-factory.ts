import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';
import {ISignUp} from '../../../domain/usecasaes/signUp';
import {RemoteSignUp} from '../../../data/usecases/remote-signUp';

export const makeRemoteSignUp = (): ISignUp =>
  new RemoteSignUp(makeApiUrl('/user'), makeAxiosHttpClient());
