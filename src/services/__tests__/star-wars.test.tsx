import { StarWarsService } from '../star-wars';
import { AxiosHttpClient } from '@/infra/http/axios-http-client';
import { HttpResponse } from '@/data/protocols/http';

vi.mock('@/infra/http/axios-http-client');

describe('StarWarsService', () => {
  let starWarsService: StarWarsService;
  let httpClientMock: vi.Mocked<AxiosHttpClient>;

  beforeEach(() => {
    httpClientMock = new AxiosHttpClient() as vi.Mocked<AxiosHttpClient>;
    starWarsService = new StarWarsService();
    starWarsService['httpClient'] = httpClientMock;
  });

  it('should fetch image data successfully', async () => {
    const mockResponse: HttpResponse<any> = {
      statusCode: 200,
      body: [
        {
          _id: '1',
          name: 'Luke Skywalker',
          description: 'Jedi Knight',
          image: 'luke.jpg',
          __v: 0
        }
      ]
    };
    httpClientMock.request.mockResolvedValue(mockResponse);

    const response = await starWarsService.getImage('Luke Skywalker');
    expect(response).toEqual(mockResponse);
    expect(httpClientMock.request).toHaveBeenCalledWith({
      url: `${import.meta.env.VITE_STAR_WARS_IMAGE_API_URL}/api/v1/characters/name/Luke Skywalker`,
      method: 'get'
    });
  });

  it('should fetch homeworld data successfully', async () => {
    const mockResponse: HttpResponse<any> = {
      statusCode: 200,
      body: {
        name: 'Tatooine',
        population: '200000'
      }
    };
    httpClientMock.request.mockResolvedValue(mockResponse);

    const response = await starWarsService.getHomeworld('https://swapi.dev/api/planets/1/');
    expect(response).toEqual(mockResponse);
    expect(httpClientMock.request).toHaveBeenCalledWith({
      url: 'https://swapi.dev/api/planets/1/',
      method: 'get'
    });
  });
});
