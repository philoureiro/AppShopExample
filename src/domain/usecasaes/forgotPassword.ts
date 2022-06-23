export interface IForgotPassword {
  sendEmail: (email: string) => Promise<string>;
}
