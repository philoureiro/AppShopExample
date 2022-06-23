import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {UserModel} from '../../domain/models';
import {
  IUpdateUser,
  IUpdateUserParams,
} from '../../domain/usecasaes/updateUser';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteUpdateUser implements IUpdateUser {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<UserModel>,
  ) {}

  update = async (params: IUpdateUserParams, accessToken: string) => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params,
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
