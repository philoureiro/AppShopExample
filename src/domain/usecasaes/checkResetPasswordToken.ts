export type ICheckResetPasswordTokenParams = {
  email: string;
  token: string;
};
export interface ICheckResetPasswordToken {
  check: (params: ICheckResetPasswordTokenParams) => Promise<string>;
}
