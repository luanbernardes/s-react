import { useState, useEffect, useTransition } from 'react';
import { starWarsService } from '@/services';
import { GetImageResponse } from '@/services/star-wars';
import { Homeworld } from '@/@types/start-wars';

export const useDetail = (peopleName?: string, homeworldUrl?: string) => {
  const [dataImage, setDataImage] = useState<GetImageResponse>();
  const [loading, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [dataHomeworld, setDataHomeworld] = useState<Homeworld>();

  useEffect(() => {
    startTransition(async () => {
      try {
        const [response, responseHomeworld] = await Promise.all([
          peopleName ? starWarsService.getImage(peopleName) : Promise.resolve(undefined),
          homeworldUrl ? starWarsService.getHomeworld(homeworldUrl) : Promise.resolve(undefined)
        ]);

        setDataImage(response?.body?.[0]);
        setDataHomeworld(responseHomeworld?.body);
      } catch {
        setError('Failed to fetch data');
      }
    });
  }, [peopleName, homeworldUrl]);

  return {
    dataImage,
    dataHomeworld,
    loading,
    error
  };
};
