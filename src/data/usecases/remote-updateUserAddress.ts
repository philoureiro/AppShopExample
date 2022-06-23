import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {AddressModel} from '../../domain/models';
import {IUpdateUserAddress} from '../../domain/usecasaes/updateUserAddress';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteUpdateUserAddress implements IUpdateUserAddress {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AddressModel>,
  ) {}

  update = async (params: AddressModel, accessToken: string) => {
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
