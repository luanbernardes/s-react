import { AxiosHttpClient } from '@/infra/http/axios-http-client';
import { StarWarsService } from '@/services/star-wars';
import { SwapiService } from '@/services/swapi';

const httpClientAxios = new AxiosHttpClient();

const starWarsService = new StarWarsService(httpClientAxios);
const swapiService = new SwapiService(httpClientAxios);

export { starWarsService, swapiService };
