import {HttpClient, HttpStatusCode} from '../protocols/http';

import {InvalidCredentialsError, UnexpectedError} from '../../domain/errors';
import {
  IAuthentication,
  AuthenticationParams,
} from '../../domain/usecasaes/authentication';
import {AccountModel} from '../../domain/models';

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>,
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    console.log('params', params);
    console.log(this.url);
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    console.log('http', httpResponse);
    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError();
      default:
        throw new UnexpectedError();
    }
  }
}
