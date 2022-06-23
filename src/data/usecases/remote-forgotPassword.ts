import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {AccountModel} from '../../domain/models';
import {IForgotPassword} from '../../domain/usecasaes/forgotPassword';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteForgotPassword implements IForgotPassword {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>,
  ) {}

  async sendEmail(email: string) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: {email},
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  }
}
