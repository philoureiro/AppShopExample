import {AccountModel} from '../models/account-model';
import {UserModel} from '../models/user-model';

export interface ISignUp {
  add: (params: UserModel) => Promise<AccountModel>;
}
