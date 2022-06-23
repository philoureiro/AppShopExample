import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {
  ICheckResetPasswordToken,
  ICheckResetPasswordTokenParams,
} from '../../domain/usecasaes/checkResetPasswordToken';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteCheckResetPasswordToken implements ICheckResetPasswordToken {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<string>,
  ) {}

  async check(params: ICheckResetPasswordTokenParams) {
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
