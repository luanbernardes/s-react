import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http';
import { Homeworld } from '@/@types/start-wars';

const baseUrl = import.meta.env.VITE_STAR_WARS_IMAGE_API_URL;

export interface GetImageResponse {
  _id: string;
  name: string;
  description: string;
  image: string;
  __v: number;
}

export class StarWarsService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getImage(startWarsName: string): Promise<HttpResponse<GetImageResponse[]>> {
    const httpRequest: HttpRequest = {
      url: `${baseUrl}/api/v1/characters/name/${startWarsName}`,
      method: 'get'
    };
    return this.httpClient.request(httpRequest);
  }

  async getHomeworld(homeworldUrlRequest: string): Promise<HttpResponse<Homeworld>> {
    const httpRequest: HttpRequest = {
      url: `${homeworldUrlRequest}`,
      method: 'get'
    };
    return this.httpClient.request(httpRequest);
  }
}
