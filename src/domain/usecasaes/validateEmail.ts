export interface IValidateEmail {
  checkIfEmailAlreadyExist: (email: string) => Promise<boolean>;
}
