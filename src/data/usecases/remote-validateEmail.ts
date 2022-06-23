import {UnexpectedError} from '../../domain/errors';
import {IValidateEmail} from '../../domain/usecasaes/validateEmail';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteValidateEmail implements IValidateEmail {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<boolean>,
  ) {}

  async checkIfEmailAlreadyExist(email: string): Promise<boolean> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${email}`,
      method: 'get',
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError();
    }
  }
}
