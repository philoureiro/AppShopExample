import {UserModel} from '../models';

export type IUpdateUserParams = {
  id: string;
  name: string;
  phoneNumber: string;
};
export interface IUpdateUser {
  update: (user: IUpdateUserParams, accessToken: string) => Promise<UserModel>;
}
