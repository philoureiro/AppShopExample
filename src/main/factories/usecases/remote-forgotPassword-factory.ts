import {RemoteForgotPassword} from '../../../data/usecases/remote-forgotPassword';
import {IForgotPassword} from '../../../domain/usecasaes/forgotPassword';
import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';

export const makeRemoteForgotPassword = (): IForgotPassword =>
  new RemoteForgotPassword(
    makeApiUrl('/auth/forgotPassword'),
    makeAxiosHttpClient(),
  );
