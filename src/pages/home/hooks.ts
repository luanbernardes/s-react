import { useState, useEffect, useTransition } from 'react';
import { swapiService } from '@/services';
import { GetPeopleResponse } from '@/services/swapi';
import { HttpResponse } from '@/data/protocols/http';

export const usePeople = (pagination?: number, search?: string) => {
  const [data, setData] = useState<HttpResponse<GetPeopleResponse> | null>(null);
  const [loading, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await swapiService.getPeople(pagination, search);
        setData(response);
      } catch {
        setError('Failed to fetch data');
      }
    });
  }, [pagination, search]);

  return {
    data: data?.body?.results,
    pageSize: data?.body?.count ? Math.ceil(data?.body?.count / 10) : 0,
    loading,
    error
  };
};
