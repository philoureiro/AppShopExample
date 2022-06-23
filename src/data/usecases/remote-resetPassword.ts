import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {AccountModel} from '../../domain/models';
import {
  IResetPassword,
  ResetPasswordParams,
} from '../../domain/usecasaes/resetPassword';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteResetPassword implements IResetPassword {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>,
  ) {}

  async reset(params: ResetPasswordParams) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  }
}
