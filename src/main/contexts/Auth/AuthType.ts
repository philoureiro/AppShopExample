import {AccountModel} from '../../../domain/models';

export type UserInfo = {
  name: string;
  email: string;
};

export interface AuthContextData {
  auth?: AccountModel;
  signIn: (authData: AccountModel) => void;
  signOut: () => Promise<void>;
  updateUserInfo: (data: UserInfo) => void;
  loading: boolean;
}

export enum StorageKeys {
  Token = '@at_palex:authData',
  RefreshToken = '@at_palex:refreshToken',
}
