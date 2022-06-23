import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {UserModel} from '../../domain/models';
import {IMe} from '../../domain/usecasaes/me';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteMe implements IMe {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<{user: UserModel}>,
  ) {}

  me = async (accessToken: string) => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  };
}
