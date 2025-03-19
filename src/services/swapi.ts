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

export interface GetAllResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: [
    {
      name: string;
    }
  ];
}

export class SwapiService {
  private httpClient: AxiosHttpClient;

  constructor() {
    this.httpClient = new AxiosHttpClient();
  }

  async getPeople(pagination?: number, search?: string): Promise<HttpResponse<GetPeopleResponse>> {
    const searchUrl = !pagination ? null : `?search=${search}&page=${pagination}`;

    const httpRequest: HttpRequest = {
      url: `${baseUrl}/api/people${searchUrl}`,
      method: 'get'
    };
    return this.httpClient.request(httpRequest);
  }

  // async getAllPlanets(): Promise<HttpResponse<GetAllResponse>> {
  //   const httpRequest: HttpRequest = {
  //     url: `${baseUrl}/api/planets/`,
  //     method: 'get'
  //   };
  //   return this.httpClient.request(httpRequest);
  // }
  //
  // async getAllStartships(): Promise<HttpResponse<GetAllResponse>> {
  //   const httpRequest: HttpRequest = {
  //     url: `${baseUrl}/api/starships/`,
  //     method: 'get'
  //   };
  //   return this.httpClient.request(httpRequest);
  // }
  //
  // async getAllSpecies(): Promise<HttpResponse<GetAllResponse>> {
  //   const httpRequest: HttpRequest = {
  //     url: `${baseUrl}/api/species/`,
  //     method: 'get'
  //   };
  //   return this.httpClient.request(httpRequest);
  // }
}
