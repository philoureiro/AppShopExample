import {makeApiUrl, makeAxiosHttpClient} from '../../factories/http';
import {IValidateEmail} from '../../../domain/usecasaes/validateEmail';
import {RemoteValidateEmail} from '../../../data/usecases/remote-validateEmail';

export const makeRemoteValidateEmail = (): IValidateEmail =>
  new RemoteValidateEmail(
    makeApiUrl('/user/checkEmail'),
    makeAxiosHttpClient(),
  );
