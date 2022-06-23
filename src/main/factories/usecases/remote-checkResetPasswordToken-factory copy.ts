import {RemoteCheckResetPasswordToken} from '../../../data/usecases/remote-checkResetPasswordToken';
import {ICheckResetPasswordToken} from '../../../domain/usecasaes/checkResetPasswordToken';
import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';

export const makeRemoteCheckResetPasswordToken = (): ICheckResetPasswordToken =>
  new RemoteCheckResetPasswordToken(
    makeApiUrl('/auth/checkResetPasswordToken'),
    makeAxiosHttpClient(),
  );
