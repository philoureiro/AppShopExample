import {AddressModel} from './address-model';
import {Role} from './role';

export interface UserModel {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  passwordConfirm: string;
  photo?: string;
  role: Role;
  phoneNumber: string;
  birthDate: string;
  createdAt?: Date;
  address?: [AddressModel];
  level?: 'beginer' | 'intermediary' | 'advanced';
}
