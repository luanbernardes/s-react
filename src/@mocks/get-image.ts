import { HttpResponse } from '@/data/protocols/http';
import { GetImageResponse } from '@/services/star-wars';
import { Homeworld } from '@/@types/start-wars';

export const imageResponseMock: HttpResponse<GetImageResponse[]> = {
  statusCode: 200,
  body: [
    {
      _id: '1',
      name: 'Luke Skywalker',
      description: 'description',
      image: 'image-url',
      __v: 1
    }
  ]
};

export const homeworldResponseMock: HttpResponse<Homeworld> = {
  statusCode: 200,
  body: {
    name: 'Tatooine',
    population: '200000',
    rotation_period: '23',
    orbital_period: '304',
    diameter: '10465',
    climate: 'arid',
    gravity: '1 standard',
    terrain: 'desert',
    surface_water: '1',
    residents: [],
    films: [],
    created: new Date(),
    edited: new Date(),
    url: 'url'
  }
};
