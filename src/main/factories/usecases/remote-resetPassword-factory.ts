import {RemoteResetPassword} from '../../../data/usecases/remote-resetPassword';
import {IResetPassword} from '../../../domain/usecasaes/resetPassword';
import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';

export const makeRemoteResetPassword = (): IResetPassword =>
  new RemoteResetPassword(
    makeApiUrl('/auth/resetPassword'),
    makeAxiosHttpClient(),
  );
