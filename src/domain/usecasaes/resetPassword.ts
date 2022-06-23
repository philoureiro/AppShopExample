export interface ResetPasswordParams {
  email: string;
  token: string;
  password: string;
  passwordConfirm: string;
}

export interface IResetPassword {
  reset: (params: ResetPasswordParams) => Promise<string>;
}
