import { AxiosHttpClient } from '@/infra/http/axios-http-client';
import { HttpRequest, HttpResponse } from '@/data/protocols/http';
import { People } from '@/types/swapi';

const baseUrl = import.meta.env.VITE_SWAPI_API_URL;

export interface GetPeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: People[];
}

export class SwapiService {
  private httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  async getPeople(pagination?: number, search?: string): Promise<HttpResponse<GetPeopleResponse>> {
    const searchUrl = !pagination ? null : `?search=${search}&page=${pagination}`;

    const httpRequest: HttpRequest = {
      url: `${baseUrl}/people${searchUrl}`,
      method: 'get'
    };
    return this.httpClient.request(httpRequest);
  }
}
