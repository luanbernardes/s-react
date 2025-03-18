import { useState, useEffect } from 'react';
import { GetImageResponse, StarWarsService } from '@/services/star-wars';
import { Homeworld } from '@/types/start-wars';

export const useDetail = (peopleName?: string, homeworldUrl?: string) => {
  const [dataImage, setDataImage] = useState<GetImageResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [dataHomeworld, setDataHomeworld] = useState<Homeworld>();

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        const starWarsService = new StarWarsService();
        const [response, responseHomeworld] = await Promise.all([
          peopleName ? starWarsService.getImage(peopleName) : Promise.resolve(undefined),
          homeworldUrl ? starWarsService.getHomeworld(homeworldUrl) : Promise.resolve(undefined)
        ]);

        setDataImage(response?.body?.[0]);
        setDataHomeworld(responseHomeworld?.body);
      } catch {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [peopleName, homeworldUrl]);

  return {
    dataImage,
    dataHomeworld,
    loading,
    error
  };
};
