import {UserModel} from '../models';

export interface IMe {
  me: (accessToken: string) => Promise<{user: UserModel}>;
}
