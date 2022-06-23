import axios, {AxiosResponse} from 'axios';
import {HttpClient, HttpRequest, HttpResponse} from '../../data/protocols/http';
import {interceptorAxiosRefreshToken} from './interceptorAxiosRefreshToken';

export class AxiosHttpClient implements HttpClient {
  constructor() {
    interceptorAxiosRefreshToken(axios);
  }
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error: any) {
      axiosResponse = error.response;
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data?.data || axiosResponse?.data,
    };
  }
}
