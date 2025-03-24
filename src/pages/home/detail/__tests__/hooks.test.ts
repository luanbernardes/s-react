import { act, renderHook } from '@testing-library/react';
import { useDetail } from '../hooks';
import { starWarsService } from '@/services';
import { homeworldResponseMock, imageResponseMock } from '@/@mocks/get-image';

vi.mock('@/services');

describe('useDetail', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch data successfully', async () => {
    vi.mocked(starWarsService.getImage).mockResolvedValue(imageResponseMock);
    vi.mocked(starWarsService.getHomeworld).mockResolvedValue(homeworldResponseMock);

    const { result } = renderHook(() => useDetail('Luke Skywalker', 'homeworld-url'));

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toEqual(imageResponseMock.body?.[0]);
    expect(result.current.dataHomeworld).toEqual(homeworldResponseMock.body);
    expect(result.current.error).toBeNull();
  });

  it('should handle errors', async () => {
    vi.mocked(starWarsService.getImage).mockRejectedValue(new Error('Failed to fetch data'));

    const { result } = renderHook(() => useDetail('Luke Skywalker', 'homeworld-url'));

    expect(result.current.loading).toBe(true);

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toBeUndefined();
    expect(result.current.dataHomeworld).toBeUndefined();
    expect(result.current.error).toBe('Failed to fetch data');
  });

  it('should not fetch data if no parameters are provided', async () => {
    const { result } = renderHook(() => useDetail());

    await act(async () => {});

    expect(result.current.loading).toBe(false);
    expect(result.current.dataImage).toBeUndefined();
    expect(result.current.dataHomeworld).toBeUndefined();
    expect(result.current.error).toBeNull();
  });
});
