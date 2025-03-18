import { useState, useEffect } from 'react';
import { GetPeopleResponse, SwapiService } from '@/services/swapi';
import { HttpResponse } from '@/data/protocols/http';

export const usePeople = (pagination?: number, search?: string) => {
  const [data, setData] = useState<HttpResponse<GetPeopleResponse> | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const swapiService = new SwapiService();
        const response = await swapiService.getPeople(pagination, search);
        setData(response);
      } catch {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pagination, search]);
  console.log({ data: data?.body });

  return {
    data: data?.body?.results,
    pageSize: data?.body?.count ? Math.ceil(data?.body?.count / 10) : 0,
    loading,
    error
  };
};
